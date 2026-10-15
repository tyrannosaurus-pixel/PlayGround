// Kanto data: species, moves, encounters, trainers. Gen-1 inspired, fan names.
export const TYPES = ['Grass','Fire','Water','Electric','Normal','Flying','Bug','Poison','Ground','Rock'];

const CHART = {
  'Fire>Grass': 2, 'Fire>Bug': 2, 'Fire>Fire': .5, 'Fire>Water': .5, 'Fire>Rock': .5,
  'Water>Fire': 2, 'Water>Ground': 2, 'Water>Rock': 2, 'Water>Water': .5, 'Water>Grass': .5,
  'Grass>Water': 2, 'Grass>Ground': 2, 'Grass>Rock': 2, 'Grass>Fire': .5, 'Grass>Grass': .5, 'Grass>Bug': .5, 'Grass>Flying': .5,
  'Electric>Water': 2, 'Electric>Flying': 2, 'Electric>Electric': .5, 'Electric>Grass': .5, 'Electric>Ground': 0,
  'Ground>Electric': 2, 'Ground>Fire': 2, 'Ground>Rock': 2, 'Ground>Grass': .5, 'Ground>Flying': 0,
  'Rock>Fire': 2, 'Rock>Flying': 2, 'Rock>Bug': 2, 'Rock>Ground': .5,
  'Flying>Grass': 2, 'Flying>Bug': 2, 'Flying>Electric': .5, 'Flying>Rock': .5,
  'Bug>Grass': 2, 'Bug>Poison': .5, 'Bug>Fire': .5,
  'Poison>Grass': 2, 'Poison>Poison': .5, 'Poison>Ground': .5,
  'Normal>Rock': .5,
};
export function effectiveness(moveType, def1, def2) {
  let m = 1;
  for (const d of [def1, def2].filter(Boolean)) {
    const k = `${moveType}>${d}`;
    m *= (k in CHART) ? CHART[k] : 1;
  }
  return m;
}

export const MOVES = {
  tackle:     { name:'TACKLE', type:'Normal', power:40, acc:100, pp:35, maxpp:35 },
  scratch:    { name:'SCRATCH', type:'Normal', power:40, acc:100, pp:35, maxpp:35 },
  pound:      { name:'POUND', type:'Normal', power:40, acc:100, pp:35, maxpp:35 },
  quick:      { name:'QUICK ATK', type:'Normal', power:40, acc:100, pp:30, maxpp:30 },
  gust:       { name:'GUST', type:'Flying', power:40, acc:100, pp:35, maxpp:35 },
  peck:       { name:'PECK', type:'Flying', power:45, acc:100, pp:30, maxpp:30 },
  wing:       { name:'WING ATK', type:'Flying', power:60, acc:100, pp:25, maxpp:25 },
  ember:      { name:'EMBER', type:'Fire', power:45, acc:100, pp:25, maxpp:25 },
  flame:      { name:'FLAMETHROW', type:'Fire', power:90, acc:100, pp:15, maxpp:15 },
  vine:       { name:'VINE WHIP', type:'Grass', power:45, acc:100, pp:25, maxpp:25 },
  razor:      { name:'RAZOR LEAF', type:'Grass', power:55, acc:95, pp:25, maxpp:25 },
  solar:      { name:'SOLARBEAM', type:'Grass', power:120, acc:100, pp:10, maxpp:10 },
  watergun:   { name:'WATER GUN', type:'Water', power:45, acc:100, pp:25, maxpp:25 },
  bubble:     { name:'BUBBLEBEAM', type:'Water', power:65, acc:100, pp:20, maxpp:20 },
  hydro:      { name:'HYDRO PUMP', type:'Water', power:110, acc:80, pp:5, maxpp:5 },
  thunder:    { name:'THNDRSHOCK', type:'Electric', power:45, acc:100, pp:30, maxpp:30 },
  thunderbolt:{ name:'THUNDERBOLT', type:'Electric', power:90, acc:100, pp:15, maxpp:15 },
  sting:      { name:'POISONSTING', type:'Poison', power:35, acc:100, pp:35, maxpp:35 },
  sludge:     { name:'SLUDGE', type:'Poison', power:65, acc:100, pp:20, maxpp:20 },
  twineedle:  { name:'TWINNEEDLE', type:'Bug', power:50, acc:100, pp:20, maxpp:20 },
  stringshot: { name:'STRING SHOT', type:'Bug', power:0, acc:95, pp:40, maxpp:40, effect:'slow' },
  harden:     { name:'HARDEN', type:'Normal', power:0, acc:100, pp:30, maxpp:30, effect:'def+' },
  growl:      { name:'GROWL', type:'Normal', power:0, acc:100, pp:40, maxpp:40, effect:'atk-' },
  tailwhip:   { name:'TAIL WHIP', type:'Normal', power:0, acc:100, pp:30, maxpp:30, effect:'def-' },
  leer:       { name:'LEER', type:'Normal', power:0, acc:100, pp:30, maxpp:30, effect:'def-' },
  dig:        { name:'DIG', type:'Ground', power:80, acc:100, pp:10, maxpp:10 },
  rockthrow:  { name:'ROCK THROW', type:'Rock', power:55, acc:90, pp:15, maxpp:15 },
  rockslide:  { name:'ROCK SLIDE', type:'Rock', power:75, acc:90, pp:10, maxpp:10 },
  slam:       { name:'SLAM', type:'Normal', power:80, acc:75, pp:20, maxpp:20 },
  bite:       { name:'BITE', type:'Normal', power:60, acc:100, pp:25, maxpp:25 },
  hyperfang:  { name:'HYPER FANG', type:'Normal', power:80, acc:90, pp:15, maxpp:15 },
  confusion:  { name:'CONFUSION', type:'Normal', power:50, acc:100, pp:25, maxpp:25 },
  psybeam:    { name:'PSYBEAM', type:'Normal', power:65, acc:100, pp:20, maxpp:20 },
  hyperbeam:  { name:'HYPER BEAM', type:'Normal', power:150, acc:90, pp:5, maxpp:5 },
};

// species: id, name, type1/2, color, shape params, base stats, evolutions, learnset
export const SPECIES = {
  bulbasaur:  { name:'BULBASAUR', t1:'Grass', t2:'Poison', color:0x4caf50, accent:0x2e7d32, size:1.0, shape:'frog', hp:45, atk:49, def:49, spd:45, catch:45, xp:64, evo:{at:16,to:'ivysaur'}, moves:[[1,'tackle'],[1,'growl'],[7,'vine'],[13,'razor']] },
  ivysaur:    { name:'IVYSAUR', t1:'Grass', t2:'Poison', color:0x43a047, accent:0x1b5e20, size:1.25, shape:'frog', hp:60, atk:62, def:63, spd:60, catch:45, xp:142, evo:{at:32,to:'venusaur'}, moves:[[1,'tackle'],[1,'growl'],[7,'vine'],[13,'razor'],[20,'sludge']] },
  venusaur:   { name:'VENUSAUR', t1:'Grass', t2:'Poison', color:0x388e3c, accent:0xc2185b, size:1.6, shape:'frog', hp:80, atk:82, def:83, spd:80, catch:45, xp:236, moves:[[1,'vine'],[1,'tackle'],[13,'razor'],[25,'sludge'],[40,'solar']] },
  charmander: { name:'CHARMANDER', t1:'Fire', color:0xff8a3d, accent:0xffd54f, size:1.0, shape:'lizard', hp:39, atk:52, def:43, spd:65, catch:45, xp:62, evo:{at:16,to:'charmeleon'}, moves:[[1,'scratch'],[1,'growl'],[9,'ember'],[15,'quick']] },
  charmeleon: { name:'CHARMELEON', t1:'Fire', color:0xf4511e, accent:0xffd54f, size:1.3, shape:'lizard', hp:58, atk:64, def:58, spd:80, catch:45, xp:142, evo:{at:36,to:'charizard'}, moves:[[1,'scratch'],[9,'ember'],[15,'quick'],[24,'slash' in MOVES?'slash':'slam']] },
  charizard:  { name:'CHARIZARD', t1:'Fire', t2:'Flying', color:0xff5722, accent:0xffc107, size:1.7, shape:'dragon', hp:78, atk:84, def:78, spd:100, catch:45, xp:240, moves:[[1,'ember'],[15,'quick'],[30,'wing'],[46,'flame']] },
  squirtle:   { name:'SQUIRTLE', t1:'Water', color:0x42a5f5, accent:0x8d6e63, size:1.0, shape:'turtle', hp:44, atk:48, def:65, spd:43, catch:45, xp:63, evo:{at:16,to:'wartortle'}, moves:[[1,'tackle'],[1,'tailwhip'],[8,'watergun'],[15,'bite']] },
  wartortle:  { name:'WARTORTLE', t1:'Water', color:0x1e88e5, accent:0x90caf9, size:1.3, shape:'turtle', hp:59, atk:63, def:80, spd:58, catch:45, xp:142, evo:{at:36,to:'blastoise'}, moves:[[1,'watergun'],[15,'bite'],[24,'bubble']] },
  blastoise:  { name:'BLASTOISE', t1:'Water', color:0x1565c0, accent:0xb0bec5, size:1.65, shape:'turtle', hp:79, atk:83, def:100, spd:78, catch:45, xp:239, moves:[[1,'watergun'],[24,'bubble'],[42,'hydro']] },
  pidgey:     { name:'PIDGEY', t1:'Normal', t2:'Flying', color:0xa1887f, accent:0xffca28, size:0.9, shape:'bird', hp:40, atk:45, def:40, spd:56, catch:255, xp:50, evo:{at:18,to:'pidgeotto'}, moves:[[1,'tackle'],[5,'gust'],[9,'quick']] },
  pidgeotto:  { name:'PIDGEOTTO', t1:'Normal', t2:'Flying', color:0x8d6e63, accent:0xffca28, size:1.2, shape:'bird', hp:63, atk:60, def:55, spd:71, catch:120, xp:122, moves:[[1,'gust'],[9,'quick'],[20,'wing'],[30,'quick']] },
  rattata:    { name:'RATTATA', t1:'Normal', color:0x9e7ede, accent:0xf5f5f5, size:0.85, shape:'mouse', hp:30, atk:56, def:35, spd:72, catch:255, xp:51, evo:{at:20,to:'raticate'}, moves:[[1,'tackle'],[1,'tailwhip'],[7,'quick'],[14,'bite']] },
  raticate:   { name:'RATICATE', t1:'Normal', color:0x7e57c2, accent:0xfff176, size:1.2, shape:'mouse', hp:55, atk:81, def:60, spd:97, catch:127, xp:145, moves:[[1,'quick'],[14,'bite'],[25,'hyperfang']] },
  pikachu:    { name:'PIKACHU', t1:'Electric', color:0xffeb3b, accent:0xe53935, size:0.95, shape:'mouse', hp:35, atk:55, def:40, spd:90, catch:190, xp:105, evo:{item:'thunderstone',to:'raichu'}, moves:[[1,'scratch'],[1,'growl'],[6,'thunder'],[12,'quick']] },
  raichu:     { name:'RAICHU', t1:'Electric', color:0xffa000, accent:0xffffff, size:1.25, shape:'mouse', hp:60, atk:90, def:55, spd:110, catch:75, xp:214, moves:[[1,'thunder'],[12,'quick'],[30,'thunderbolt']] },
  caterpie:   { name:'CATERPIE', t1:'Bug', color:0x8bc34a, accent:0xff5722, size:0.8, shape:'worm', hp:45, atk:30, def:35, spd:45, catch:255, xp:39, evo:{at:7,to:'metapod'}, moves:[[1,'tackle'],[1,'stringshot']] },
  metapod:    { name:'METAPOD', t1:'Bug', color:0x689f38, accent:0x33691e, size:0.9, shape:'cocoon', hp:50, atk:20, def:55, spd:30, catch:120, xp:72, evo:{at:10,to:'butterfree'}, moves:[[1,'harden']] },
  butterfree: { name:'BUTTERFREE', t1:'Bug', t2:'Flying', color:0x7b1fa2, accent:0x90caf9, size:1.15, shape:'butterfly', hp:60, atk:45, def:50, spd:70, catch:45, xp:178, moves:[[1,'confusion'],[12,'gust'],[20,'psybeam']] },
  weedle:     { name:'WEEDLE', t1:'Bug', t2:'Poison', color:0xa1887f, accent:0xe91e63, size:0.8, shape:'worm', hp:40, atk:35, def:30, spd:50, catch:255, xp:39, evo:{at:7,to:'kakuna'}, moves:[[1,'sting']] },
  kakuna:     { name:'KAKUNA', t1:'Bug', t2:'Poison', color:0xfbc02d, accent:0x5d4037, size:0.9, shape:'cocoon', hp:45, atk:25, def:50, spd:35, catch:120, xp:72, evo:{at:10,to:'beedrill'}, moves:[[1,'harden']] },
  beedrill:   { name:'BEEDRILL', t1:'Bug', t2:'Poison', color:0xffd54f, accent:0x212121, size:1.15, shape:'bee', hp:65, atk:90, def:40, spd:75, catch:45, xp:178, moves:[[1,'peck'],[15,'twineedle'],[25,'sludge']] },
  nidoran:    { name:'NIDORAN', t1:'Poison', color:0xba68c8, accent:0x4a148c, size:0.9, shape:'mouse', hp:46, atk:57, def:40, spd:50, catch:235, xp:59, moves:[[1,'scratch'],[8,'sting'],[14,'bite']] },
  geodude:    { name:'GEODUDE', t1:'Rock', t2:'Ground', color:0x9e9e9e, accent:0x5d4037, size:1.0, shape:'rock', hp:40, atk:80, def:100, spd:20, catch:255, xp:60, moves:[[1,'tackle'],[11,'rockthrow'],[20,'dig']] },
  onix:       { name:'ONIX', t1:'Rock', t2:'Ground', color:0x8d8d8d, accent:0x424242, size:2.0, shape:'snake', hp:35, atk:45, def:160, spd:70, catch:45, xp:151, moves:[[1,'tackle'],[15,'rockthrow'],[25,'rockslide'],[33,'dig']] },
};
MOVES.slash = MOVES.slam;
export const DEX_ORDER = Object.keys(SPECIES);
export const STARTERS = ['bulbasaur','charmander','squirtle'];

// Wild tables by zone
export const WILD = {
  route1: [
    { sp:'pidgey', lv:[3,5], w:30 }, { sp:'rattata', lv:[3,5], w:30 },
    { sp:'caterpie', lv:[3,4], w:15 }, { sp:'weedle', lv:[3,4], w:15 },
    { sp:'pikachu', lv:[4,5], w:7 }, { sp:'nidoran', lv:[4,5], w:3 },
  ],
  viridian: [
    { sp:'pidgey', lv:[5,8], w:25 }, { sp:'rattata', lv:[5,8], w:25 },
    { sp:'caterpie', lv:[5,6], w:10 }, { sp:'weedle', lv:[5,6], w:10 },
    { sp:'pikachu', lv:[6,8], w:12 }, { sp:'nidoran', lv:[6,8], w:10 },
    { sp:'geodude', lv:[6,7], w:8 },
  ],
};

export function rollWild(zone) {
  const t = WILD[zone] || WILD.route1;
  const tot = t.reduce((a,b)=>a+b.w,0);
  let r = Math.random()*tot;
  for (const e of t) { r -= e.w; if (r<=0) {
    const lv = e.lv[0]+Math.floor(Math.random()*(e.lv[1]-e.lv[0]+1));
    return { species:e.sp, level:lv };
  }}
  return { species:'pidgey', level:4 };
}

export function calcStats(speciesId, level) {
  const b = SPECIES[speciesId];
  return {
    maxhp: Math.floor(((b.hp+15)*2*level)/100)+level+10,
    atk: Math.floor(((b.atk+15)*2*level)/100)+5,
    def: Math.floor(((b.def+15)*2*level)/100)+5,
    spd: Math.floor(((b.spd+15)*2*level)/100)+5,
  };
}
export function movesFor(speciesId, level) {
  const b = SPECIES[speciesId];
  const out = [];
  for (const [lv, m] of b.moves) if (lv <= level) out.push(m);
  const uniq = [...new Set(out)].slice(-4);
  return uniq.length?uniq:['tackle'];
}
export function makeMon(speciesId, level) {
  const s = calcStats(speciesId, level);
  return {
    uid: Math.random().toString(36).slice(2),
    species: speciesId, level,
    xp: level*level*level,
    ...s, hp: s.maxhp,
    moves: movesFor(speciesId, level).map(m => ({ id:m, pp: MOVES[m].pp })),
    stages: { atk:0, def:0, spd:0 },
  };
}
export function xpForLevel(l){ return l*l*l; }
export function genDamage(atk, def, power, level, stab, eff) {
  const base = (((2*level/5+2)*power*(atk/def))/50)+2;
  const mod = stab*eff*(0.85+Math.random()*0.15);
  return Math.max(1, Math.floor(base*mod));
}
