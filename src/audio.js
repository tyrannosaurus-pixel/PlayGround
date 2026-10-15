// Tiny chiptune synth
let ctx = null, muted = false;
export function isMuted(){ return muted; }
export function toggleMute(){ muted = !muted; return muted; }
function ac() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}
function beep(freq, t0, dur, type='square', vol=0.12) {
  if (muted) return;
  try {
    const c = ac(), o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, c.currentTime + t0);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + t0 + dur);
    o.connect(g); g.connect(c.destination);
    o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + 0.02);
  } catch {}
}
export const sfx = {
  blip(){ beep(660,0,.07); },
  confirm(){ beep(523,0,.08); beep(784,.08,.12); },
  back(){ beep(392,0,.1); },
  hit(){ beep(160,0,.18,'sawtooth',.2); beep(90,.02,.2,'square',.18); },
  superhit(){ beep(220,0,.1,'sawtooth',.2); beep(140,.1,.2,'sawtooth',.22); },
  faint(){ for(let i=0;i<6;i++) beep(500-i*70,i*.09,.1); },
  ball(){ beep(700,0,.08); beep(500,.1,.08); beep(300,.2,.15); },
  catch_(){ [523,659,784,1046].forEach((f,i)=>beep(f,i*.1,.12)); },
  run(){ for(let i=0;i<4;i++) beep(800+i*150,i*.06,.06); },
  heal(){ [392,523,659,784].forEach((f,i)=>beep(f,i*.09,.14,'triangle',.15)); },
  encounter(){ beep(196,0,.12,'sawtooth',.2); beep(262,.12,.12,'sawtooth',.2); beep(392,.24,.3,'square',.18); },
  levelup(){ [523,659,784,1046,1318].forEach((f,i)=>beep(f,i*.08,.12)); },
  evo(){ for(let i=0;i<8;i++) beep(400+i*120,i*.1,.1,'triangle',.15); },
  badge(){ [523,523,523,659,784,1046].forEach((f,i)=>beep(f,i*.12,.15)); },
  buy(){ beep(880,0,.08); beep(1174,.08,.15); },
  error(){ beep(180,0,.2,'square',.15); },
};
export function ensureAudio(){ try { ac(); } catch {} }
