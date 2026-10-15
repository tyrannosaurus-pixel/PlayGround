import * as THREE from 'three';
import { SPECIES } from './data.js';

export const TILE = 2;
export const MW = 48, MH = 48;
export const wx = (gx) => (gx - MW/2 + 0.5) * TILE;
export const wz = (gz) => (gz - MH/2 + 0.5) * TILE;
export const gxOf = (x) => Math.floor(x / TILE + MW/2);
export const gzOf = (z) => Math.floor(z / TILE + MH/2);

function canvasGroundTexture() {
  const S = 1024, c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const px = S / MW;
  const grass1 = '#5fae4a', grass2 = '#57a344';
  for (let x = 0; x < MW; x++) for (let z = 0; z < MH; z++) {
    g.fillStyle = ((x+z)%2===0)?grass1:grass2;
    // path
    if (x>=22 && x<=25) g.fillStyle = '#d9b382';
    // town plazas
    if (z>=34 && z<=42 && x>=14 && x<=34) g.fillStyle = ((x+z)%2? '#7cc45e':'#77bd59');
    if (z>=4 && z<=13 && x>=14 && x<=34) g.fillStyle = ((x+z)%2? '#7cc45e':'#77bd59');
    if (x>=22 && x<=25) g.fillStyle = '#d9b382';
    g.fillRect(x*px, z*px, px, px);
  }
  // tall grass patches (darker + tufts drawn later in 3D)
  const patches = tallGrassRects();
  for (const [x0,z0,x1,z1] of patches) {
    for (let x=x0;x<=x1;x++) for (let z=z0;z<=z1;z++) {
      if (x>=22&&x<=25&&(z<18||z>26?false:true)) { /* keep path clear in route */ }
      else { g.fillStyle = '#3f8f37'; g.fillRect(x*px,z*px,px,px); }
    }
  }
  // pond south
  g.fillStyle = '#3aa7e0';
  g.beginPath(); g.ellipse(10*px, 44*px, 5*px, 2.4*px, 0, 0, 7); g.fill();
  g.fillStyle = '#2a75bb';
  g.beginPath(); g.ellipse(10*px, 44*px, 3.4*px, 1.5*px, 0, 0, 7); g.fill();
  // viridian pond
  g.fillStyle = '#3aa7e0';
  g.fillRect(6*px, 5*px, 5*px, 4*px);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
export function tallGrassRects() {
  return [
    [16,19,21,26], [26,19,31,26],   // route 1 west/east of path
    [15,15,21,17], [26,15,32,17],   // viridian approach
    [8,6,10,12], [37,6,40,12],      // side patches
  ];
}
export function inTallGrass(gx, gz) {
  if (gx>=22&&gx<=25&&gz>=18&&gz<=26) return false; // path safe
  return tallGrassRects().some(([x0,z0,x1,z1]) => gx>=x0&&gx<=x1&&gz>=z0&&gz<=z1);
}
export function wildZone(gx, gz) {
  return gz >= 14 ? 'route1' : 'viridian';
}
export function locationName(gx, gz) {
  if (gz >= 28) return 'PALLET TOWN';
  if (gz >= 14) return 'ROUTE 1';
  return 'VIRIDIAN CITY';
}

export function buildPokemonMesh(speciesId) {
  const sp = SPECIES[speciesId];
  const grp = new THREE.Group();
  const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: .7 });
  const body = mat(sp.color), acc = mat(sp.accent), dark = mat(0x222222), white = mat(0xffffff);
  const s = sp.size;
  const add = (geo, m, x=0,y=0,z=0, rx=0,ry=0,rz=0) => {
    const mesh = new THREE.Mesh(geo, m);
    mesh.position.set(x,y,z); mesh.rotation.set(rx,ry,rz);
    mesh.castShadow = true;
    grp.add(mesh); return mesh;
  };
  const belly = (y=0.7*s) => add(new THREE.SphereGeometry(0.55*s, 14, 12), body, 0, y, 0);
  switch (sp.shape) {
    case 'frog': {
      belly(); add(new THREE.SphereGeometry(0.42*s,12,10), body, 0, 1.25*s, 0.1);
      add(new THREE.SphereGeometry(0.14*s,8,8), white, -0.2*s, 1.4*s, 0.42*s);
      add(new THREE.SphereGeometry(0.14*s,8,8), white, 0.2*s, 1.4*s, 0.42*s);
      add(new THREE.SphereGeometry(0.06*s,6,6), dark, -0.2*s, 1.42*s, 0.54*s);
      add(new THREE.SphereGeometry(0.06*s,6,6), dark, 0.2*s, 1.42*s, 0.54*s);
      add(new THREE.CylinderGeometry(0.3*s,0.42*s,0.25*s,10), acc, 0, 1.62*s, -0.1);
      for (const sx of [-1,1]) {
        add(new THREE.CylinderGeometry(0.13*s,0.16*s,0.5*s,8), body, sx*0.55*s, 0.35*s, 0.1);
        add(new THREE.CylinderGeometry(0.13*s,0.16*s,0.5*s,8), body, sx*0.55*s, 0.35*s, -0.35);
      }
      grp.userData.ears = [];
      break;
    }
    case 'lizard': case 'dragon': {
      belly(0.75*s);
      add(new THREE.SphereGeometry(0.4*s,12,10), body, 0, 1.3*s, 0.15);
      add(new THREE.ConeGeometry(0.16*s,0.4*s,8), white, -0.16*s, 1.05*s, 0.5);
      add(new THREE.SphereGeometry(0.13*s,8,8), white, -0.18*s, 1.45*s, 0.4*s);
      add(new THREE.SphereGeometry(0.13*s,8,8), white, 0.18*s, 1.45*s, 0.4*s);
      add(new THREE.SphereGeometry(0.06*s,6,6), dark, -0.18*s, 1.47*s, 0.5*s);
      add(new THREE.SphereGeometry(0.06*s,6,6), dark, 0.18*s, 1.47*s, 0.5*s);
      const tail = add(new THREE.ConeGeometry(0.18*s,1.1*s,8), body, 0, 0.6*s, -0.8*s, -1.9, 0, 0);
      const flame = add(new THREE.ConeGeometry(0.14*s,0.4*s,8), mat(0xffd54f), 0, 0.75*s, -1.35*s);
      flame.material.emissive = new THREE.Color(0xff6d00); flame.material.emissiveIntensity = .8;
      grp.userData.flame = flame;
      if (sp.shape==='dragon') {
        for (const sx of [-1,1]) add(new THREE.PlaneGeometry(0.9*s,0.5*s), new THREE.MeshStandardMaterial({color:0x90caf9,side:THREE.DoubleSide}), sx*0.55*s, 1.1*s, -0.3, 0, sx*0.5, 0);
      }
      for (const sx of [-1,1]) add(new THREE.CylinderGeometry(0.12*s,0.15*s,0.55*s,8), body, sx*0.5*s, 0.35*s, 0);
      break;
    }
    case 'turtle': {
      belly(0.7*s);
      const shellMat = new THREE.MeshStandardMaterial({color: sp.accent, roughness:.7, side: THREE.DoubleSide});
      const shell = new THREE.Mesh(new THREE.SphereGeometry(0.62*s,14,12,0,Math.PI*2,0,Math.PI/2.2), shellMat);
      shell.position.set(0, 0.85*s, -0.12); shell.castShadow = true;
      grp.add(shell);
      add(new THREE.SphereGeometry(0.38*s,12,10), body, 0, 1.25*s, 0.25);
      add(new THREE.SphereGeometry(0.12*s,8,8), white, -0.16*s, 1.38*s, 0.55*s);
      add(new THREE.SphereGeometry(0.12*s,8,8), white, 0.16*s, 1.38*s, 0.55*s);
      add(new THREE.SphereGeometry(0.05*s,6,6), dark, -0.16*s, 1.4*s, 0.65*s);
      add(new THREE.SphereGeometry(0.05*s,6,6), dark, 0.16*s, 1.4*s, 0.65*s);
      if (sp.name==='BLASTOISE') for (const sx of [-1,1]) add(new THREE.CylinderGeometry(0.16*s,0.2*s,0.7*s,10), mat(0xb0bec5), sx*0.5*s, 1.0*s, -0.5, 1.2, 0, sx*0.4);
      break;
    }
    case 'bird': {
      belly(0.8*s);
      add(new THREE.SphereGeometry(0.36*s,12,10), body, 0, 1.35*s, 0.15);
      add(new THREE.ConeGeometry(0.12*s,0.35*s,8), acc, 0, 1.32*s, 0.6*s, Math.PI/2, 0, 0);
      add(new THREE.SphereGeometry(0.1*s,8,8), dark, -0.14*s, 1.45*s, 0.42*s);
      add(new THREE.SphereGeometry(0.1*s,8,8), dark, 0.14*s, 1.45*s, 0.42*s);
      const wL = add(new THREE.PlaneGeometry(0.9*s,0.45*s), new THREE.MeshStandardMaterial({color:sp.color,side:THREE.DoubleSide}), -0.6*s, 1.0*s, 0);
      const wR = add(new THREE.PlaneGeometry(0.9*s,0.45*s), new THREE.MeshStandardMaterial({color:sp.color,side:THREE.DoubleSide}), 0.6*s, 1.0*s, 0);
      grp.userData.wings = [wL, wR];
      add(new THREE.ConeGeometry(0.16*s,0.6*s,6), acc, 0, 0.8*s, -0.7*s, -1.8, 0, 0);
      break;
    }
    case 'mouse': {
      belly(0.65*s);
      add(new THREE.SphereGeometry(0.4*s,12,10), body, 0, 1.2*s, 0.1);
      const eL = add(new THREE.ConeGeometry(0.16*s,0.45*s,6), acc, -0.28*s, 1.65*s, 0);
      const eR = add(new THREE.ConeGeometry(0.16*s,0.45*s,6), acc, 0.28*s, 1.65*s, 0);
      grp.userData.ears = [eL, eR];
      add(new THREE.SphereGeometry(0.09*s,8,8), dark, -0.14*s, 1.28*s, 0.45*s);
      add(new THREE.SphereGeometry(0.09*s,8,8), dark, 0.14*s, 1.28*s, 0.45*s);
      add(new THREE.SphereGeometry(0.07*s,8,8), mat(0xe53935), 0, 1.12*s, 0.48*s);
      const tail = add(new THREE.CylinderGeometry(0.05*s,0.08*s,1.0*s,6), acc, 0.4*s, 0.7*s, -0.4, 0, 0, 1.1);
      grp.userData.tail = tail;
      if (sp.name==='PIKACHU'||sp.name==='RAICHU') for (const sx of [-1,1]) add(new THREE.SphereGeometry(0.12*s,8,8), mat(0xe53935), sx*0.38*s, 1.18*s, 0.25*s);
      break;
    }
    case 'worm': {
      for (let i=0;i<4;i++) add(new THREE.SphereGeometry((0.42-i*0.06)*s,10,8), i%2?acc:body, 0, 0.5*s, (-0.6+i*0.4)*s);
      add(new THREE.SphereGeometry(0.16*s,8,8), dark, -0.15*s, 0.75*s, 0.75*s);
      add(new THREE.SphereGeometry(0.16*s,8,8), dark, 0.15*s, 0.75*s, 0.75*s);
      add(new THREE.ConeGeometry(0.1*s,0.35*s,6), acc, 0, 0.9*s, 0.75*s);
      break;
    }
    case 'cocoon': {
      add(new THREE.CapsuleGeometry(0.45*s, 0.7*s, 6, 12), body, 0, 0.8*s, 0);
      add(new THREE.TorusGeometry(0.3*s, 0.07*s, 8, 14), acc, 0, 1.0*s, 0, Math.PI/2, 0, 0);
      add(new THREE.SphereGeometry(0.1*s,8,8), dark, 0, 1.2*s, 0.4*s);
      break;
    }
    case 'butterfly': case 'bee': {
      belly(0.7*s);
      add(new THREE.SphereGeometry(0.3*s,10,8), dark, 0, 1.2*s, 0.1);
      add(new THREE.SphereGeometry(0.16*s,8,8), dark, -0.12*s, 1.45*s, 0.2*s);
      add(new THREE.SphereGeometry(0.16*s,8,8), dark, 0.12*s, 1.45*s, 0.2*s);
      const wmat = new THREE.MeshStandardMaterial({color: sp.shape==='bee'?0xe1f5fe:0x90caf9, side:THREE.DoubleSide, transparent:true, opacity:.95});
      const wL = add(new THREE.PlaneGeometry(0.8*s,0.6*s), wmat, -0.5*s, 1.2*s, -0.1);
      const wR = add(new THREE.PlaneGeometry(0.8*s,0.6*s), wmat, 0.5*s, 1.2*s, -0.1);
      grp.userData.wings = [wL, wR];
      if (sp.shape==='bee') add(new THREE.ConeGeometry(0.12*s,0.4*s,8), dark, 0, 0.6*s, -0.7*s, -1.9, 0, 0);
      break;
    }
    case 'rock': {
      add(new THREE.DodecahedronGeometry(0.6*s), body, 0, 0.7*s, 0);
      add(new THREE.DodecahedronGeometry(0.3*s), acc, 0.4*s, 1.1*s, 0.2);
      add(new THREE.SphereGeometry(0.14*s,8,8), white, -0.18*s, 0.85*s, 0.5*s);
      add(new THREE.SphereGeometry(0.14*s,8,8), white, 0.18*s, 0.85*s, 0.5*s);
      add(new THREE.SphereGeometry(0.06*s,6,6), dark, -0.18*s, 0.87*s, 0.6*s);
      add(new THREE.SphereGeometry(0.06*s,6,6), dark, 0.18*s, 0.87*s, 0.6*s);
      for (const sx of [-1,1]) add(new THREE.DodecahedronGeometry(0.28*s), body, sx*0.65*s, 0.5*s, 0);
      break;
    }
    case 'snake': {
      for (let i=0;i<6;i++) add(new THREE.DodecahedronGeometry((0.55-i*0.05)*s), i%2?acc:body, 0, 0.6*s+i*0.5*s, -Math.sin(i*0.8)*0.4*s);
      add(new THREE.SphereGeometry(0.14*s,8,8), white, -0.15*s, 3.2*s, 0.4*s);
      add(new THREE.SphereGeometry(0.14*s,8,8), white, 0.15*s, 3.2*s, 0.4*s);
      break;
    }
    default: belly();
  }
  // shadow blob
  const sh = new THREE.Mesh(new THREE.CircleGeometry(0.6*s, 16), new THREE.MeshBasicMaterial({color:0x000000, transparent:true, opacity:.25}));
  sh.rotation.x = -Math.PI/2; sh.position.y = 0.02;
  grp.add(sh);
  grp.userData.baseY = 0;
  return grp;
}

export function buildHumanMesh({ shirt=0xe33, pants=0x2233aa, skin=0xffcc99, cap=0xe33, hair=0x222222 }={}) {
  const g = new THREE.Group();
  const M = (c)=>new THREE.MeshStandardMaterial({color:c, roughness:.8});
  const add=(geo,m,x=0,y=0,z=0)=>{const ms=new THREE.Mesh(geo,m);ms.position.set(x,y,z);ms.castShadow=true;g.add(ms);return ms;};
  add(new THREE.BoxGeometry(.55,.6,.35), M(pants), 0,.3,0);           // legs
  add(new THREE.BoxGeometry(.6,.65,.4), M(shirt), 0,.92,0);           // torso
  add(new THREE.BoxGeometry(.18,.5,.18), M(skin), -.4,.9,0);          // arms
  add(new THREE.BoxGeometry(.18,.5,.18), M(skin), .4,.9,0);
  add(new THREE.SphereGeometry(.28,12,10), M(skin), 0,1.5,0);         // head
  add(new THREE.BoxGeometry(.34,.16,.06), M(hair), 0,1.52,.25);      // eyes strip
  add(new THREE.CylinderGeometry(.3,.3,.16,12), M(cap), 0,1.72,0);   // cap
  add(new THREE.BoxGeometry(.3,.06,.3), M(cap), 0,1.66,.32);         // brim
  add(new THREE.SphereGeometry(.09,8,8), M(0xffffff), 0,1.82,0);
  const sh = new THREE.Mesh(new THREE.CircleGeometry(.5,14), new THREE.MeshBasicMaterial({color:0,transparent:true,opacity:.25}));
  sh.rotation.x=-Math.PI/2; sh.position.y=.02; g.add(sh);
  g.userData.armL = g.children[2]; g.userData.armR = g.children[3];
  return g;
}
