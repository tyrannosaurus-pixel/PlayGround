import { SPECIES, MOVES, DEX_ORDER, STARTERS, rollWild, makeMon, xpForLevel, calcStats } from './data.js';
import { Battle } from './battle.js';
import { sfx, ensureAudio, toggleMute, isMuted } from './audio.js';
import { gxOf, gzOf, inTallGrass, wildZone, locationName, wx, wz } from './world.js';

const $ = (id) => document.getElementById(id);

export function initGame(K) {
  const S = {
    started: false, hasStarter: false,
    party: [], dexSeen: new Set(), dexCaught: new Set(),
    money: 3000, balls: 5, potions: 3,
    badges: [], flags: {},
    lastHeal: { x: wx(23), z: wz(41) },
    player: { x: wx(23), z: wz(41), dir: Math.PI, moving: false },
    inBattle: false, inDialog: false, menuOpen: false,
    encounterAcc: 0,
  };

  // ---------- helpers ----------
  const toast = (t, ms=2400) => { const e=$('toast'); e.textContent=t; e.classList.remove('hidden'); clearTimeout(e._t); e._t=setTimeout(()=>e.classList.add('hidden'),ms); };
  function updateHUD(){
    $('hud-money').textContent = `₽ ${S.money}`;
    $('hud-balls').textContent = `◉ ${S.balls}`;
    $('hud-badges').textContent = `★ ${S.badges.length}`;
    $('hud-dex').textContent = `DEX ${S.dexCaught.size}/${DEX_ORDER.length}`;
  }
  function save(){
    try {
      const data = { party:S.party, dexSeen:[...S.dexSeen], dexCaught:[...S.dexCaught], money:S.money, balls:S.balls, potions:S.potions, badges:S.badges, flags:S.flags, hasStarter:S.hasStarter, lastHeal:S.lastHeal, px:S.player.x, pz:S.player.z };
      localStorage.setItem('pr3d-save', JSON.stringify(data));
      toast('Game saved!');
      sfx.confirm();
    } catch { toast('Save failed'); }
  }
  function hasSave(){ try { return !!localStorage.getItem('pr3d-save'); } catch { return false; } }
  function load(){
    try {
      const d = JSON.parse(localStorage.getItem('pr3d-save'));
      if(!d || !d.party?.length) return false;
      S.party=d.party; S.dexSeen=new Set(d.dexSeen); S.dexCaught=new Set(d.dexCaught);
      S.money=d.money; S.balls=d.balls; S.potions=d.potions; S.badges=d.badges||[]; S.flags=d.flags||{};
      S.hasStarter=d.hasStarter; S.lastHeal=d.lastHeal; S.player.x=d.px; S.player.z=d.pz;
      K.player.position.set(S.player.x,0,S.player.z);
      return true;
    } catch { return false; }
  }
  function healParty(){
    for(const m of S.party){ m.hp=m.maxhp; for(const mv of m.moves) mv.pp = MOVES[mv.id].pp; m.stages={atk:0,def:0,spd:0}; }
    sfx.heal(); toast('Party fully healed!');
  }
  function markSeen(species){ S.dexSeen.add(species); }
  function markCaught(species){ S.dexSeen.add(species); S.dexCaught.add(species); }

  // ---------- dialog ----------
  let dlgQueue=[], dlgResolve=null, dlgChoices=null;
  function say(name, text, choices=null){
    return new Promise(res=>{
      dlgQueue.push({name,text,choices,res});
      if(dlgQueue.length===1 && !$('dialog').classList.contains('hidden')===false) {}
      pumpDialog();
    });
  }
  function pumpDialog(){
    if(!dlgQueue.length){ $('dialog').classList.add('hidden'); S.inDialog=false; return; }
    S.inDialog=true;
    const {name,text,choices}=dlgQueue[0];
    $('dialog').classList.remove('hidden');
    $('dialog-name').textContent=name;
    $('dialog-choices').innerHTML='';
    // typewriter
    const el=$('dialog-text'); el.textContent='';
    let i=0; clearInterval(el._t);
    el._t=setInterval(()=>{ i+=2; el.textContent=text.slice(0,i); if(i>=text.length) clearInterval(el._t); },14);
    el.onclick=(e)=>{ e.stopPropagation(); clearInterval(el._t); el.textContent=text; };
    dlgChoices=choices;
    if(choices){
      $('dialog-next').style.display='none';
      for(const c of choices){
        const b=document.createElement('button'); b.textContent=c.label;
        b.onclick=(e)=>{ e.stopPropagation(); sfx.confirm(); const v=c.value; dlgQueue.shift(); pumpDialog(); dlgQueue.length?null:null; c.resolve?v:null; dlgResolve?.(v); const q=dlgQueue; };
        // simpler: resolve via closure
        b.onclick=(e)=>{ e.stopPropagation(); sfx.blip(); const item=dlgQueue.shift(); item.res(c.value); pumpDialog(); };
        $('dialog-choices').appendChild(b);
      }
    } else $('dialog-next').style.display='block';
  }
  function advanceDialog(){
    if($('dialog').classList.contains('hidden')) return;
    if(dlgChoices) return;
    const el=$('dialog-text');
    const cur=dlgQueue[0];
    if(!cur) return;
    if(el.textContent.length < cur.text.length){ clearInterval(el._t); el.textContent=cur.text; return; }
    sfx.blip();
    dlgQueue.shift(); const r=cur.res; pumpDialog(); r?.(null);
  }
  $('dialog').addEventListener('click', advanceDialog);

  async function oakIntro(){
    ensureAudio();
    $('intro').classList.remove('hidden');
    const pages=[
      "Hello there! Welcome to the world of POKéMON! My name is OAK. People call me the POKéMON PROF.",
      "This world is inhabited by creatures called POKéMON! I study them in 3D, up close, in tall grass and caves.",
      "You are about to leave PALLET TOWN on your own adventure. Choose one partner to protect you!",
    ];
    let pi=0;
    const render=()=>{ $('intro-text').textContent=pages[pi]; $('btn-intro-next').textContent = pi<pages.length-1?'NEXT ▼':'CHOOSE YOUR PARTNER ▼'; };
    render();
    $('starter-row').innerHTML='';
    for(const id of STARTERS){
      const sp=SPECIES[id];
      const d=document.createElement('div'); d.className='starter';
      d.innerHTML=`<div class="dot" style="background:#${sp.color.toString(16).padStart(6,'0')}"></div><b>${sp.name}</b><small>${sp.t1} · Lv5</small><div style="font-size:12px;margin-top:4px">${id==='bulbasaur'?'Balanced seed':id==='charmander'?'Fiery & fast':'Tough & sturdy'}</div>`;
      d.onclick=()=>chooseStarter(id);
      $('starter-row').appendChild(d);
    }
    await new Promise(res=>{
      $('btn-intro-next').onclick=()=>{ sfx.blip(); pi++; if(pi<pages.length){ render(); } else { $('intro-text').textContent='Click your partner below! These three are rare — choose wisely.'; $('btn-intro-next').style.display='none'; } };
      $('intro')._res=res;
    });
  }
  async function chooseStarter(id){
    sfx.confirm();
    const mon=makeMon(id,5);
    S.party=[mon]; S.hasStarter=true;
    markCaught(id); markSeen(id);
    S.balls=5; S.potions=3;
    $('intro').classList.add('hidden'); $('intro')._res?.();
    $('btn-intro-next').style.display='';
    K.player.position.set(wx(23),0,wz(41)); S.player.x=wx(23); S.player.z=wz(41);
    updateHUD();
    await say('OAK', `Excellent! ${SPECIES[id].name} is a fine choice! Take these 5 POKé BALLS and this POKéDEX.`);
    await say('OAK', `Walk north through ROUTE 1's tall grass to VIRIDIAN CITY. Your rival BLUE is waiting west of my lab... and Leader BROCK guards the gym! Get 2 BADGES!`);
    toast(`${SPECIES[id].name} joined your party!`);
    S.lastHeal={x:wx(23),z:wz(41)};
  }

  // ---------- menu ----------
  function openMenu(tab=''){
    S.menuOpen=true; $('menu').classList.remove('hidden'); renderMenu(tab);
  }
  function closeMenu(){ S.menuOpen=false; $('menu').classList.add('hidden'); }
  document.querySelectorAll('#menu [data-act]').forEach(b=>b.onclick=()=>{ sfx.blip(); const a=b.dataset.act;
    if(a==='close') closeMenu();
    if(a==='pokedex'||a==='pokemon'||a==='bag'||a==='save'||a==='help') renderMenu(a);
  });
  function renderMenu(tab){
    const body=$('menu-body');
    if(tab==='pokedex'){
      body.innerHTML=`<b>POKéDEX — seen ${S.dexSeen.size} / caught ${S.dexCaught.size}</b>`+DEX_ORDER.map(id=>{
        const seen=S.dexSeen.has(id), got=S.dexCaught.has(id);
        const sp=SPECIES[id];
        return `<div class="dex-row">${got?'◉':seen?'○':'?'} ${seen?sp.name:'???'} <small>${seen?sp.t1+(sp.t2?'/'+sp.t2:'')+' · HT '+(sp.size*1.1).toFixed(1)+'m':''}</small></div>`;
      }).join('');
    } else if(tab==='pokemon'){
      body.innerHTML=S.party.map((m,i)=>{
        const sp=SPECIES[m.species];
        return `<div class="party-row"><div class="dot" style="background:#${sp.color.toString(16).padStart(6,'0')}"></div><div><b>${sp.name}</b> Lv${m.level} <small>HP ${m.hp}/${m.maxhp} · ATK ${m.atk} DEF ${m.def} SPD ${m.spd}</small><br><small>${m.moves.map(x=>MOVES[x.id].name+' '+x.pp+'pp').join(' · ')}</small></div></div>`;
      }).join('')+`<div><small>Potions: ${S.potions} · Balls: ${S.balls}</small> <button id="use-potion">Use Potion (heal 30)</button></div>`;
      $('use-potion').onclick=()=>{
        const hurt=S.party.find(m=>m.hp>0&&m.hp<m.maxhp);
        if(S.potions<=0){ toast('No potions!'); sfx.error(); return; }
        if(!hurt){ toast('Everyone is full HP'); return; }
        S.potions--; hurt.hp=Math.min(hurt.maxhp,hurt.hp+30); sfx.heal(); updateHUD(); renderMenu('pokemon');
      };
    } else if(tab==='bag'){
      body.innerHTML=`<div>◉ POKé BALL × ${S.balls}</div><div>🧪 POTION × ${S.potions} <button id="bag-potion">use</button></div><div>🏅 BADGES: ${S.badges.join(', ')||'none'}</div><div>₽ Money: ${S.money}</div><div><button id="mute-btn">${isMuted()?'🔊 UNMUTE':'🔇 MUTE'}</button></div>`;
      $('bag-potion').onclick=()=>renderMenu('pokemon');
      $('mute-btn').onclick=()=>{ toggleMute(); renderMenu('bag'); };
    } else if(tab==='save'){ save(); body.innerHTML='Progress saved to this browser.'; }
    else if(tab==='help'){ $('help').classList.remove('hidden'); }
    else body.innerHTML='Choose a category above. Quest: beat BLUE + BROCK.';
  }
  $('party-close').onclick=closeParty;
  function openPartyOverworld(){
    $('party').classList.remove('hidden');
    $('party-list').innerHTML=S.party.map((m,i)=>{
      const sp=SPECIES[m.species];
      return `<div class="party-row"><div class="dot" style="background:#${sp.color.toString(16).padStart(6,'0')}"></div><div><b>${sp.name}</b> Lv${m.level} HP ${m.hp}/${m.maxhp}</div></div>`;
    }).join('');
  }
  function closeParty(){ $('party').classList.add('hidden'); }
  $('help-close').onclick=()=>$('help').classList.add('hidden');
  $('win-close').onclick=()=>{ $('win').classList.add('hidden'); };

  // ---------- shop ----------
  async function shop(){
    sfx.confirm();
    const pick = await say('CLERK','Welcome to the MART! POKé BALL ₽200 · POTION ₽300. What will you buy? (Your money: ₽'+S.money+')',[
      {label:'◉ BALL ₽200',value:'ball'},{label:'🧪 POTION ₽300',value:'potion'},{label:'Leave',value:'x'}
    ]);
    if(pick==='ball'){
      if(S.money<200){ sfx.error(); await say('CLERK','Not enough money!'); }
      else { S.money-=200; S.balls++; sfx.buy(); await say('CLERK','Thank you! Come again!'); }
      updateHUD(); return shop();
    }
    if(pick==='potion'){
      if(S.money<300){ sfx.error(); await say('CLERK','Not enough money!'); }
      else { S.money-=300; S.potions++; sfx.buy(); await say('CLERK','Thank you! Come again!'); }
      updateHUD(); return shop();
    }
  }

  // ---------- interactions ----------
  function nearestNPC(){
    let best=null,bd=9;
    for(const n of K.npcs){
      const dx=n.mesh.position.x-S.player.x, dz=n.mesh.position.z-S.player.z;
      const d=dx*dx+dz*dz;
      if(d<bd){bd=d;best=n;}
    }
    return bd<7?best:null;
  }
  async function interact(){
    if(S.inBattle||S.inDialog||S.menuOpen) return;
    ensureAudio();
    // NPC first
    const n=nearestNPC();
    if(n){
      n.face=Math.atan2(S.player.x-n.mesh.position.x, S.player.z-n.mesh.position.z);
      await handleNPC(n);
      return;
    }
    // signs / doors by tile
    const gx=gxOf(S.player.x), gz=gzOf(S.player.z);
    if(gx===21&&gz===33) return say('SIGN','PALLET TOWN — Shades of your journey await!');
    if(gx===21&&gz===27) return say('SIGN','ROUTE 1 — Tall grass hides wild POKéMON! Walk through it!');
    if(gx===24&&gz===13) return say('SIGN','VIRIDIAN CITY — Gym Leader BROCK awaits challengers!');
    if(gx===26&&gz===9) return say('SIGN','VIRIDIAN GYM — Rock-solid trainer!');
    // lab table = dex check
    if(gx>=28&&gx<=32&&gz>=37&&gz<=40&&!S.hasStarter){ return startForcedIntro(); }
  }
  async function startForcedIntro(){ await oakIntro(); }
  function counterStarter(){
    const s=S.party[0]?.species;
    if(s==='bulbasaur') return 'charmander';
    if(s==='charmander') return 'squirtle';
    return 'bulbasaur';
  }
  async function handleNPC(n){
    switch(n.id){
      case 'mom':
        await say('MOM','Oh, sweetie! You look tired. Let me heal your POKéMON...');
        healParty(); S.lastHeal={x:K.player.position.x,z:K.player.position.z}; updateHUD();
        break;
      case 'oak': {
        if(!S.hasStarter){ await oakIntro(); }
        else {
          if(!S.flags.oakBalls){ S.flags.oakBalls=true; S.balls+=5; updateHUD(); await say('OAK',`How is your POKéDEX? I gave you 5 extra BALLS. Catch many kinds! (Balls: ${S.balls})`); }
          else await say('OAK',`Tall grass = encounters. Weaken them first, then throw a BALL. Thundershock fries water, fire melts grass!`);
        }
        break;
      }
      case 'rival': {
        if(!S.hasStarter){ await say('BLUE','Hey! Loser! Get a POKéMON from grandpa first, then I will crush you!'); break; }
        if(S.flags.rivalBeaten){ await say('BLUE','Tch... you got lucky. BROCK uses rock types — bring water or grass moves!'); break; }
        await say('BLUE','Yo! I already caught strong ones! Let me see how weak you are!');
        startTrainerBattle('BLUE', [makeMon(counterStarter(),7), makeMon('pidgey',6)], 'rival');
        break;
      }
      case 'nurse':
        await say('NURSE','Welcome to the POKéMON CENTER! Restoring your team...');
        healParty(); S.lastHeal={x:wx(23),z:wz(11)}; updateHUD();
        break;
      case 'clerk': await shop(); break;
      case 'brock': {
        if(!S.hasStarter){ await say('BROCK','Kid, you need a POKéMON before challenging my gym.'); break; }
        if(S.flags.brockBeaten){ await say('BROCK','Your rock-crushing spirit is strong. The Boulder Badge suits you.'); break; }
        await say('BROCK','I am BROCK, the rock-hard Gym Leader! My GEODUDE and ONIX will flatten you!');
        startTrainerBattle('BROCK', [makeMon('geodude',12), makeMon('onix',14)], 'brock');
        break;
      }
      case 'kid': await say('KID','I saw PIKACHU in the west grass! It is yellow and super rare! SHIFT = run faster!'); break;
      case 'granny': await say('GRANNY','If your party faints you wake at the last CENTER or home. Potions save lives, dearie. Press M for menu.'); break;
    }
    checkChampion();
  }
  function checkChampion(){
    if(S.flags.rivalBeaten && S.flags.brockBeaten && !S.flags.champion){
      S.flags.champion=true;
      sfx.badge();
      const n=S.dexCaught.size;
      $('win-text').textContent=`You defeated BLUE and BROCK! Badges: ${S.badges.join(', ')}. Pokédex: ${n}/${DEX_ORDER.length}. You are the demo CHAMPION — keep catching them all!`;
      $('win').classList.remove('hidden');
    }
  }

  // ---------- battles ----------
  let B=null;
  function aliveCount(){ return S.party.filter(m=>m.hp>0).length; }
  function showBattleUI(v){
    $('battle').classList.toggle('hidden',!v);
    $('hud').classList.toggle('hidden',v);
    if(!v){ ['battle-fight','battle-party','battle-bag'].forEach(id=>$(id).classList.add('hidden')); $('battle-menu').classList.remove('hidden'); }
  }
  function refreshBattle(){
    if(!B) return;
    const me=B.me, foe=B.foe;
    $('b-me-name').textContent=SPECIES[me.species].name; $('b-me-lv').textContent='Lv'+me.level;
    $('b-foe-name').textContent=(B.isTrainer?B.trainerName+"'s ":'')+SPECIES[foe.species].name; $('b-foe-lv').textContent='Lv'+foe.level;
    $('b-me-hp').style.width=(100*me.hp/me.maxhp)+'%';
    $('b-foe-hp').style.width=(100*foe.hp/foe.maxhp)+'%';
    $('b-foe-hp').style.background = foe.hp/foe.maxhp>.5?'linear-gradient(90deg,#3fbf3f,#7dff7d)':foe.hp/foe.maxhp>.2?'linear-gradient(90deg,#d6a300,#ffe066)':'linear-gradient(90deg,#c62828,#ff8a80)';
    $('b-me-hp').style.background = me.hp/me.maxhp>.5?'linear-gradient(90deg,#3fbf3f,#7dff7d)':me.hp/me.maxhp>.2?'linear-gradient(90deg,#d6a300,#ffe066)':'linear-gradient(90deg,#c62828,#ff8a80)';
    $('b-me-hpnum').textContent=`HP ${me.hp}/${me.maxhp}`;
    $('b-foe-hpnum').textContent=`HP ${foe.hp}/${foe.maxhp}`;
    const need=xpForLevel(me.level+1)-xpForLevel(me.level);
    const got=me.xp-xpForLevel(me.level);
    $('b-me-xp').style.width=Math.min(100,100*got/need)+'%';
    K.setBattleModels(foe.species, me.species);
    updateHUD();
  }
  function bmsg(t){ $('battle-msg').textContent=t; }
  function hideSubs(){ ['battle-fight','battle-party','battle-bag'].forEach(id=>$(id).classList.add('hidden')); $('battle-menu').classList.remove('hidden'); }

  async function startWildBattle(){
    if(S.inBattle||!S.hasStarter||aliveCount()===0) return;
    const gx=gxOf(S.player.x), gz=gzOf(S.player.z);
    const {species,level}=rollWild(wildZone(gx,gz));
    const foe=makeMon(species,level);
    markSeen(species);
    await enterBattle({foeParty:[foe],isWild:true,isTrainer:false,canCatch:true});
  }
  async function startTrainerBattle(name,team,is){
    if(S.inBattle) return;
    for(const m of team) markSeen(m.species);
    await enterBattle({foeParty:team,isWild:false,isTrainer:true,trainerName:name,canCatch:false,tag:is});
  }
  async function enterBattle(opts){
    S.inBattle=true; closeMenu(); closeParty();
    sfx.encounter();
    const f=$('flash'); f.style.opacity=.9; setTimeout(()=>f.style.opacity=0,220);
    await new Promise(r=>setTimeout(r,500));
    showBattleUI(true);
    // ensure first alive leads
    const ai=S.party.findIndex(m=>m.hp>0);
    if(ai>0){ const [m]=S.party.splice(ai,1); S.party.unshift(m); }
    for(const m of S.party) m.stages={atk:0,def:0,spd:0};
    for(const m of opts.foeParty) m.stages={atk:0,def:0,spd:0};
    B=new Battle({ myParty:S.party, foeParty:opts.foeParty, isWild:opts.isWild, isTrainer:opts.isTrainer, trainerName:opts.trainerName, canCatch:opts.canCatch,
      onMsg:(t)=>bmsg(t), onUpdate:refreshBattle,
      onEnd:(res)=>endBattle(res,opts),
    });
    // normalize async msg timing
    B.msg=async(t,ms=1100)=>{ bmsg(t); await new Promise(r=>setTimeout(r,ms)); };
    wireBattleButtons();
    refreshBattle();
    await B.start();
    hideSubs();
  }
  function wireBattleButtons(){
    document.querySelectorAll('#battle-menu [data-b]').forEach(btn=>{
      btn.onclick=async()=>{
        if(!B||B.busy||B.over) return;
        ensureAudio(); sfx.blip();
        const k=btn.dataset.b;
        if(k==='fight'){
          const box=$('battle-fight'); box.classList.remove('hidden'); $('battle-menu').classList.add('hidden');
          box.innerHTML=B.me.moves.map((m,i)=>{ const mv=MOVES[m.id]; return `<button data-i="${i}">${mv.name}<br><small>${mv.type} P${mv.power} · ${m.pp}pp</small></button>`; }).join('')+`<button id="bf-back">← BACK</button>`;
          box.querySelectorAll('[data-i]').forEach(b=>b.onclick=async()=>{
            box.classList.add('hidden');
            const r=await B.doTurn(Number(b.dataset.i));
            refreshBattle(); hideSubs();
            if(r==='retry') return;
          });
          $('bf-back').onclick=()=>hideSubs();
        }
        if(k==='bag'){
          const box=$('battle-bag'); box.classList.remove('hidden'); $('battle-menu').classList.add('hidden');
          box.innerHTML=`<button id="bb-ball">◉ BALL ×${S.balls}</button><button id="bb-pot">🧪 POTION ×${S.potions}</button><button id="bb-back">← BACK</button>`;
          $('bb-back').onclick=()=>hideSubs();
          $('bb-ball').onclick=async()=>{
            if(S.balls<=0){ sfx.error(); bmsg('No POKé BALLS! Buy more at the MART!'); return; }
            S.balls--; updateHUD();
            box.classList.add('hidden');
            const caught=await B.tryCatch();
            refreshBattle();
            if(caught){
              const foe=B.foe;
              markCaught(foe.species);
              const copy={...foe,uid:Math.random().toString(36).slice(2),moves:foe.moves.map(m=>({...m}))};
              if(S.party.length<6) S.party.push(copy);
              else { S.flags.box=(S.flags.box||0)+1; }
              bmsg(`Caught ${SPECIES[foe.species].name}! ${S.party.length>=6?'Sent to BOX.':'Joined party!'}`);
              await new Promise(r=>setTimeout(r,1400));
              B.over=true; B.onEnd('catch');
            } else hideSubs();
          };
          $('bb-pot').onclick=async()=>{
            if(S.potions<=0){ sfx.error(); return; }
            const hurt=B.me;
            if(hurt.hp>=hurt.maxhp){ bmsg('Already full HP!'); return; }
            S.potions--; hurt.hp=Math.min(hurt.maxhp,hurt.hp+30); sfx.heal();
            box.classList.add('hidden');
            bmsg(`Used POTION! +30 HP`);
            await new Promise(r=>setTimeout(r,800));
            // foe free hit
            await B.useMove(B.foe,B.me,B.foeChooseMove(),true);
            if(B.me.hp<=0) await B.handleFaint(true);
            refreshBattle(); hideSubs();
            if(B.over) return;
          };
        }
        if(k==='mon'){
          const box=$('battle-party'); box.classList.remove('hidden'); $('battle-menu').classList.add('hidden');
          box.innerHTML=S.party.map((m,i)=>{const sp=SPECIES[m.species];return `<button data-i="${i}" ${m.hp<=0?'disabled style="opacity:.4"':''}>${sp.name} Lv${m.level} ${m.hp}/${m.maxhp}</button>`;}).join('')+`<button id="bp-back">← BACK</button>`;
          $('bp-back').onclick=()=>hideSubs();
          box.querySelectorAll('[data-i]').forEach(b=>b.onclick=async()=>{
            const i=Number(b.dataset.i);
            if(S.party[i]===B.me||S.party[i].hp<=0) return;
            // switch costs a turn
            const tmp=S.party[0]; S.party[0]=S.party[i]; S.party[i]=tmp;
            B.me=S.party[0]; B.mi=0; B.me.stages={atk:0,def:0,spd:0};
            sfx.confirm(); box.classList.add('hidden');
            bmsg(`Come back! Go! ${SPECIES[B.me.species].name}!`);
            await new Promise(r=>setTimeout(r,900));
            await B.useMove(B.foe,B.me,B.foeChooseMove(),true);
            if(B.me.hp<=0) await B.handleFaint(true);
            refreshBattle(); hideSubs();
          });
        }
        if(k==='run'){
          const r=await B.tryRun();
          refreshBattle();
          if(r===true){ B.over=true; B.onEnd('run'); }
          else if(r==='check' && B.me.hp<=0 && B.over){ /* handled */ }
        }
      };
    });
  }
  async function endBattle(result, opts){
    updateHUD();
    if(result==='lose'){
      S.money=Math.floor(S.money/2);
      // revive half + teleport
      for(const m of S.party) if(m.hp<=0){ m.hp=Math.floor(m.maxhp/2); }
      healParty();
      S.player.x=S.lastHeal.x; S.player.z=S.lastHeal.z;
      K.player.position.set(S.player.x,0,S.player.z);
      showBattleUI(false); K.clearBattleModels(); S.inBattle=false; B=null;
      await say('NURSE','You blacked out! Your team was restored... (lost half your money)');
      updateHUD(); return;
    }
    if(result==='win'){
      if(opts.isTrainer){
        const prize=400+opts.foeParty.reduce((a,p)=>a+p.level,0)*60;
        S.money+=prize;
        if(opts.tag==='rival'){ S.flags.rivalBeaten=true; S.badges.push('RIVAL'); K.npcs.find(n=>n.id==='rival').mesh.position.set(wx(20),0,wz(40)); toast('BLUE defeated! He storms off...'); }
        if(opts.tag==='brock'){ S.flags.brockBeaten=true; S.badges.push('BOULDER'); }
        S.badges=[...new Set(S.badges)];
      } else {
        // wild win money none, small chance ball drop
        if(Math.random()<.2){ S.balls++; toast('Found a leftover BALL! +1'); }
      }
      showBattleUI(false); K.clearBattleModels(); S.inBattle=false; B=null;
      updateHUD(); checkChampion(); save();
      return;
    }
    if(result==='run'||result==='catch'){
      showBattleUI(false); K.clearBattleModels(); S.inBattle=false; B=null;
      updateHUD(); save(); return;
    }
  }

  // ---------- input ----------
  const keys={};
  addEventListener('keydown',(e)=>{
    if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code)) e.preventDefault();
    keys[e.code]=true;
    ensureAudio();
    if(e.code==='Enter' && !$('title').classList.contains('hidden')){ $('btn-start').click(); }
    if((e.code==='KeyE'||e.code==='Space')){
      if(S.started&&!S.inBattle) advanceDialog();
      if(S.started&&!S.inBattle&&!S.inDialog&&!S.menuOpen) interact();
    }
    if(e.code==='Escape'||e.code==='KeyM'){
      if(!S.started||S.inBattle) return;
      if($('help').classList.contains('hidden')===false){ $('help').classList.add('hidden'); return; }
      if(!$('party').classList.contains('hidden')){ closeParty(); return; }
      S.menuOpen?closeMenu():openMenu('pokemon');
    }
  });
  addEventListener('keyup',(e)=>{ keys[e.code]=false; });
  // mouse orbit
  let dragging=false,lx=0;
  canvasEvents();
  function canvasEvents(){
    const cv=$('scene');
    cv.addEventListener('mousedown',(e)=>{dragging=true;lx=e.clientX;});
    addEventListener('mouseup',()=>dragging=false);
    addEventListener('mousemove',(e)=>{ if(dragging){ K.rig.yaw -= (e.clientX-lx)*.006; lx=e.clientX; } });
    cv.addEventListener('wheel',(e)=>{ K.rig.dist=Math.min(20,Math.max(6,K.rig.dist+e.deltaY*.01)); },{passive:true});
    cv.addEventListener('click',()=>{ if(S.started&&!S.inBattle&&!S.inDialog) interact(); });
  }

  // ---------- title ----------
  if(hasSave()) $('btn-continue').classList.remove('hidden');
  $('btn-continue').onclick=()=>{
    ensureAudio(); sfx.confirm();
    if(load()){ beginPlay(true); }
    else toast('No valid save');
  };
  $('btn-start').onclick=async()=>{
    ensureAudio(); sfx.confirm();
    $('title').classList.add('hidden');
    if(hasSave() && !S.started){
      // fresh overrides? ask via starter anyway only if no party
    }
    beginPlay(false);
    if(!S.hasStarter){ await say('OAK','Welcome! First, visit my LAB (big green roof, south-east) — or press on and I will meet you now...'); await oakIntro(); }
  };
  function beginPlay(continued){
    S.started=true;
    $('hud').classList.remove('hidden');
    $('loading').style.display='none';
    K.player.position.set(S.player.x,0,S.player.z);
    updateHUD();
    const gx=gxOf(S.player.x);
    toast(continued?'Welcome back, trainer!':'Use WASD to walk. Go north to ROUTE 1!');
    if(continued && !S.hasStarter){ /* edge */ }
  }

  // ---------- main loop ----------
  const SPEED=7, RUN=11;
  let stepT=0;
  function tick(){
    requestAnimationFrame(tick);
    const dt=Math.min(.05,K.clock.getDelta());
    const t=K.clock.elapsedTime;
    let mx=0,mz=0;
    const introOpen=!$('intro').classList.contains('hidden');
    if(S.started&&!S.inBattle&&!S.inDialog&&!S.menuOpen&&!introOpen&&$('win').classList.contains('hidden')){
      if(keys['KeyW']||keys['ArrowUp'])mz-=1;
      if(keys['KeyS']||keys['ArrowDown'])mz+=1;
      if(keys['KeyA']||keys['ArrowLeft'])mx-=1;
      if(keys['KeyD']||keys['ArrowRight'])mx+=1;
      if(mx||mz){
        const run=(keys['ShiftLeft']||keys['ShiftRight'])?RUN:SPEED;
        // camera-relative
        const yaw=K.rig.yaw;
        const sin=Math.sin(yaw),cos=Math.cos(yaw);
        let dx=(mx*cos - mz*sin), dz=(mx*sin + mz*cos);
        // W should move away from camera (negative z in rig space): with yaw=0 camera behind +z, W(-z input mz=-1) => dz=-1 correct
        const len=Math.hypot(dx,dz); dx/=len; dz/=len;
        const nx=S.player.x+dx*run*dt, nz=S.player.z+dz*run*dt;
        if(!K.isBlockedAt(nx,S.player.z)) S.player.x=nx;
        if(!K.isBlockedAt(S.player.x,nz)) S.player.z=nz;
        S.player.moving=true;
        const target=Math.atan2(dx,dz);
        let d=target-K.player.rotation.y;
        while(d>Math.PI)d-=Math.PI*2; while(d<-Math.PI)d+=Math.PI*2;
        K.player.rotation.y+=d*Math.min(1,dt*12);
        K.player.position.set(S.player.x,Math.abs(Math.sin(t*10))*.08,S.player.z);
        // encounters
        const gx=gxOf(S.player.x),gz=gzOf(S.player.z);
        if(inTallGrass(gx,gz)&&S.hasStarter){
          S.encounterAcc+=dt*len;
          if(S.encounterAcc>.55){ S.encounterAcc=0; if(Math.random()<.22) startWildBattle(); }
        } else S.encounterAcc=0;
        // location HUD
        const loc=locationName(gx,gz);
        if($('hud-location').textContent!==loc) $('hud-location').textContent=loc;
        stepT+=dt;
      } else { S.player.moving=false; K.player.position.set(S.player.x,0,S.player.z); S.encounterAcc=Math.max(0,S.encounterAcc-dt); }
    } else {
      K.player.position.set(S.player.x,K.player.position.y*.8,S.player.z);
    }
    K.updateCamera(dt,S.player.x,S.player.z,S.inBattle);
    K.animate(dt,t,S.player.moving,S.inBattle);
    K.renderer.render(K.scene,K.camera);
  }

  updateHUD();
  tick();
  return { S, save, interact, startWildBattle, openMenu };
}
