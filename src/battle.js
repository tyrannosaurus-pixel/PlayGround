import { MOVES, SPECIES, effectiveness, genDamage, calcStats, movesFor, xpForLevel, makeMon } from './data.js';
import { sfx } from './audio.js';

export function stageMul(s){ return s>=0 ? (2+s)/2 : 2/(2-s); }

export class Battle {
  constructor({ myParty, foeParty, isWild, isTrainer, trainerName, onMsg, onUpdate, onEnd, canCatch=true }) {
    this.myParty = myParty; this.foeParty = foeParty;
    this.isWild = isWild; this.isTrainer = isTrainer;
    this.trainerName = trainerName || '';
    this.onMsg = onMsg; this.onUpdate = onUpdate; this.onEnd = onEnd;
    this.canCatch = canCatch && isWild;
    this.mi = 0; this.fi = 0;
    this.me = myParty[0]; this.foe = foeParty[0];
    this.over = false; this.busy = false;
    this.rewards = { xp: 0, money: 0 };
  }
  alive(p){ return p.hp > 0; }
  firstAlive(party){ return party.findIndex(p=>p.hp>0); }
  async msg(t, ms=1100){ this.onMsg(t); await new Promise(r=>setTimeout(r, ms)); }
  hpFrac(p){ return Math.max(0, p.hp/p.maxhp); }

  async start() {
    this.onUpdate();
    if (this.isTrainer) await this.msg(`${this.trainerName} wants to battle!`, 1300);
    else await this.msg(`A wild ${SPECIES[this.foe.species].name} appeared!`, 1300);
    await this.msg(`Go! ${SPECIES[this.me.species].name}!`);
    this.onUpdate();
  }

  foeChooseMove(){
    const moves = this.foe.moves.filter(m=>m.pp>0);
    const pool = moves.length?moves:this.foe.moves;
    return pool[Math.floor(Math.random()*pool.length)];
  }

  async useMove(att, def, moveEntry, isFoe){
    const mv = MOVES[moveEntry.id];
    if (moveEntry.pp>0) moveEntry.pp--;
    const an = SPECIES[att.species].name;
    await this.msg(`${an} used ${mv.name}!`, 800);
    if (mv.effect && mv.power===0) {
      if (mv.effect==='def+'){ att.stages.def=Math.min(6,att.stages.def+1); await this.msg(`${an}'s DEFENSE rose!`); }
      if (mv.effect==='atk-'){ def.stages.atk=Math.max(-6,def.stages.atk-1); await this.msg(`${SPECIES[def.species].name}'s ATTACK fell!`); }
      if (mv.effect==='def-'){ def.stages.def=Math.max(-6,def.stages.def-1); await this.msg(`${SPECIES[def.species].name}'s DEFENSE fell!`); }
      if (mv.effect==='slow'){ def.stages.spd=Math.max(-6,def.stages.spd-1); await this.msg(`${SPECIES[def.species].name} is slowed!`); }
      this.onUpdate(); return;
    }
    if (Math.random()*100 > mv.acc) { await this.msg(`But it missed!`); sfx.back(); this.onUpdate(); return; }
    const stab = (mv.type===SPECIES[att.species].t1||mv.type===SPECIES[att.species].t2)?1.5:1;
    const eff = effectiveness(mv.type, SPECIES[def.species].t1, SPECIES[def.species].t2);
    const atk = att.atk*stageMul(att.stages.atk), dfs = def.def*stageMul(def.stages.def);
    const dmg = genDamage(atk, dfs, mv.power, att.level, stab, eff);
    def.hp = Math.max(0, def.hp - dmg);
    if (eff===0) { await this.msg(`It doesn't affect enemy...`); }
    else {
      if (eff>1){ await this.msg(`Super effective! (-${dmg})`, 700); sfx.superhit(); }
      else if (eff<1){ await this.msg(`Not very effective... (-${dmg})`, 700); sfx.hit(); }
      else { await this.msg(`Hit for ${dmg}!`, 650); sfx.hit(); }
    }
    this.flashFoe(!isFoe);
    this.onUpdate();
    if (def.hp<=0) { sfx.faint(); await this.msg(`${SPECIES[def.species].name} fainted!`); }
  }
  flashFoe(foe){ const el = foe?document.getElementById('b-foe-hp'):document.getElementById('b-me-hp'); if(el){ el.style.filter='brightness(3)'; setTimeout(()=>el.style.filter='',180);} const f=document.getElementById('flash'); if(f){f.style.opacity=.7; setTimeout(()=>f.style.opacity=0,140);} }

  async doTurn(myMoveIdx){
    if (this.over || this.busy) return;
    this.busy = true;
    try {
      const myMove = this.me.moves[myMoveIdx];
      if (!myMove || myMove.pp<=0) { await this.msg(`No PP left for that move!`); this.busy=false; return 'retry'; }
      const foeMove = this.foeChooseMove();
      const meSpd = this.me.spd*stageMul(this.me.stages.spd), foeSpd = this.foe.spd*stageMul(this.foe.stages.spd);
      const meFirst = meSpd >= foeSpd || Math.random()<.1;
      if (meFirst) {
        await this.useMove(this.me, this.foe, myMove, false);
        if (this.foe.hp<=0) { await this.handleFaint(false); this.busy=false; return 'done'; }
        await this.useMove(this.foe, this.me, foeMove, true);
        if (this.me.hp<=0) { await this.handleFaint(true); this.busy=false; return 'done'; }
      } else {
        await this.useMove(this.foe, this.me, foeMove, true);
        if (this.me.hp<=0) { await this.handleFaint(true); this.busy=false; return 'done'; }
        await this.useMove(this.me, this.foe, myMove, false);
        if (this.foe.hp<=0) { await this.handleFaint(false); this.busy=false; return 'done'; }
      }
    } finally { this.busy=false; this.onUpdate(); }
    return 'done';
  }

  async handleFaint(meFainted){
    if (!meFainted) {
      // foe fainted: xp
      const base = SPECIES[this.foe.species].xp;
      const gained = Math.floor(base * this.foe.level / 7 * (this.isTrainer?1.5:1));
      await this.msg(`${SPECIES[this.me.species].name} gained ${gained} EXP!`, 900);
      await this.gainXp(this.me, gained);
      this.fi++;
      if (this.fi >= this.foeParty.length) {
        await this.win();
        return;
      } else {
        this.foe = this.foeParty[this.fi];
        this.foe.stages={atk:0,def:0,spd:0};
        if (this.isTrainer) await this.msg(`${this.trainerName} sent out ${SPECIES[this.foe.species].name}!`);
        else await this.msg(`Wild ${SPECIES[this.foe.species].name} appeared!`);
      }
    } else {
      this.mi = this.firstAlive(this.myParty);
      if (this.mi===-1) { await this.lose(); return; }
      this.me = this.myParty[this.mi];
      this.me.stages={atk:0,def:0,spd:0};
      await this.msg(`Go! ${SPECIES[this.me.species].name}!`);
    }
    this.onUpdate();
  }

  async gainXp(mon, amt){
    mon.xp += amt;
    while (mon.xp >= xpForLevel(mon.level+1)) {
      mon.level++;
      const s = calcStats(mon.species, mon.level);
      const dhp = s.maxhp - mon.maxhp;
      mon.maxhp=s.maxhp; mon.atk=s.atk; mon.def=s.def; mon.spd=s.spd;
      mon.hp = Math.min(mon.maxhp, mon.hp+dhp);
      sfx.levelup();
      await this.msg(`${SPECIES[mon.species].name} grew to Lv${mon.level}!`, 1000);
      // learn moves
      const sp = SPECIES[mon.species];
      for (const [lv,m] of sp.moves) if (lv===mon.level && !mon.moves.some(x=>x.id===m)) {
        if (mon.moves.length>=4) mon.moves.shift();
        mon.moves.push({id:m, pp:MOVES[m].pp});
        await this.msg(`${SPECIES[mon.species].name} learned ${MOVES[m].name}!`, 1100);
      }
      // evolution
      if (sp.evo && sp.evo.at && mon.level>=sp.evo.at) {
        const to = sp.evo.to;
        sfx.evo();
        await this.msg(`What? ${sp.name} is evolving!`, 1300);
        const ns = calcStats(to, mon.level);
        mon.species = to; mon.maxhp=ns.maxhp; mon.atk=ns.atk; mon.def=ns.def; mon.spd=ns.spd;
        mon.hp = Math.min(mon.hp+ (ns.maxhp-s.maxhp), mon.maxhp);
        for (const [lv,m] of SPECIES[to].moves) if (lv<=mon.level && !mon.moves.some(x=>x.id===m)) { if(mon.moves.length>=4)mon.moves.shift(); mon.moves.push({id:m,pp:MOVES[m].pp}); }
        await this.msg(`Congratulations! It evolved into ${SPECIES[to].name}!`, 1400);
        this.onUpdate();
      }
    }
    this.onUpdate();
  }

  catchRate(){
    const foe = this.foe;
    const ballBonus = 1;
    const statusBonus = 1;
    const a = ((3*foe.maxhp - 2*foe.hp) * SPECIES[foe.species].catch * ballBonus / (3*foe.maxhp)) * statusBonus;
    return Math.min(255, a) / 255;
  }
  async tryCatch(){
    if (!this.canCatch) { await this.msg(`Can't steal a trainer's POKéMON!`); return false; }
    sfx.ball();
    await this.msg(`You threw a POKé BALL!`, 900);
    const p = this.catchRate();
    // shake 3 times
    for (let i=0;i<3;i++){ await this.msg(`...${'·'.repeat(i+1)}`, 450); if (Math.random()> (p+.28)) { await this.msg(`Oh no! It broke free!`); return false; } }
    sfx.catch_();
    await this.msg(`Gotcha! ${SPECIES[this.foe.species].name} was caught!`, 1300);
    return true;
  }
  async tryRun(){
    if (this.isTrainer) { await this.msg(`No! There's no running from a trainer battle!`); return false; }
    const meS=this.me.spd, foeS=this.foe.spd;
    if (meS>=foeS || Math.random()<.6) { sfx.run(); await this.msg(`Got away safely!`); return true; }
    await this.msg(`Can't escape!`);
    // foe free hit
    await this.useMove(this.foe, this.me, this.foeChooseMove(), true);
    if (this.me.hp<=0) await this.handleFaint(true);
    return 'check';
  }
  async win(){
    this.over=true;
    if (this.isTrainer) {
      const prize = 400 + this.foeParty.reduce((a,p)=>a+p.level,0)*60;
      this.rewards.money = prize;
      sfx.badge();
      await this.msg(`You defeated ${this.trainerName}! Got ₽${prize}!`, 1400);
    }
    this.onEnd('win');
  }
  async lose(){
    this.over=true;
    await this.msg(`You have no POKéMON left... You blacked out!`, 1400);
    this.onEnd('lose');
  }
}
