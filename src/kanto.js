import * as THREE from 'three';
import { TILE, MW, MH, wx, wz, gxOf, gzOf, inTallGrass, wildZone, locationName, buildPokemonMesh, buildHumanMesh } from './world.js';

export function createKanto(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb);
  scene.fog = new THREE.Fog(0x87ceeb, 60, 160);

  const camera = new THREE.PerspectiveCamera(55, innerWidth/innerHeight, .1, 500);

  scene.add(new THREE.HemisphereLight(0xbfe3ff, 0x3f7d33, .95));
  const sun = new THREE.DirectionalLight(0xfff6d8, 1.6);
  sun.position.set(40, 60, 20);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left=-60; sun.shadow.camera.right=60;
  sun.shadow.camera.top=60; sun.shadow.camera.bottom=-60;
  scene.add(sun);

  // ---- ground ----
  const blocked = Array.from({length:MW},()=>Array(MH).fill(false));
  const block = (x0,z0,x1,z1)=>{ for(let x=x0;x<=x1;x++)for(let z=z0;z<=z1;z++) if(x>=0&&z>=0&&x<MW&&z<MH) blocked[x][z]=true; };
  const groundTex = makeGroundTexture();
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(MW*TILE, MH*TILE), new THREE.MeshStandardMaterial({map:groundTex, roughness:1}));
  ground.rotation.x = -Math.PI/2; ground.receiveShadow = true;
  scene.add(ground);

  const props = new THREE.Group(); scene.add(props);
  const grassTufts = [];

  const M = (c, r=.85)=>new THREE.MeshStandardMaterial({color:c, roughness:r});
  function box(w,h,d,c,x,y,z,ry=0){ const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),M(c)); m.position.set(x,y,z); m.rotation.y=ry; m.castShadow=true; m.receiveShadow=true; props.add(m); return m; }
  function tree(gx,gz,s=1){
    const x=wx(gx), z=wz(gz);
    const trunk=new THREE.Mesh(new THREE.CylinderGeometry(.22*s,.3*s,1.4*s,8),M(0x6d4c41));
    trunk.position.set(x,.7*s,z); trunk.castShadow=true; props.add(trunk);
    const c1=new THREE.Mesh(new THREE.ConeGeometry(1.2*s,1.8*s,8),M(0x2e7d32));
    c1.position.set(x,2.0*s,z); c1.castShadow=true; props.add(c1);
    const c2=new THREE.Mesh(new THREE.ConeGeometry(.85*s,1.3*s,8),M(0x388e3c));
    c2.position.set(x,3.0*s,z); c2.castShadow=true; props.add(c2);
    block(gx,gz,gx,gz);
  }
  function fence(gx,gz){ box(TILE*.95,.7,.18,0x8d6e63,wx(gx),.35,wz(gz)); block(gx,gz,gx,gz); }
  function lamp(gx,gz){
    const x=wx(gx),z=wz(gz);
    const p=new THREE.Mesh(new THREE.CylinderGeometry(.09,.12,3,8),M(0x37474f)); p.position.set(x,1.5,z); p.castShadow=true; props.add(p);
    const b=new THREE.Mesh(new THREE.SphereGeometry(.32,10,8),new THREE.MeshStandardMaterial({color:0xfff9c4,emissive:0xffeb3b,emissiveIntensity:.7}));
    b.position.set(x,3.1,z); props.add(b);
  }
  function flowerPatch(gx,gz,color){
    const f=new THREE.Mesh(new THREE.SphereGeometry(.16,6,5),M(color,.6));
    f.position.set(wx(gx)+(Math.random()-.5), .18, wz(gz)+(Math.random()-.5)); props.add(f);
  }
  function grassTuft(gx,gz){
    const g=new THREE.Group();
    const gm=new THREE.MeshStandardMaterial({color:0x2f7d2a,side:THREE.DoubleSide,roughness:1});
    for(let i=0;i<3;i++){
      const p=new THREE.Mesh(new THREE.PlaneGeometry(.9,.8),gm);
      p.position.set((Math.random()-.5)*.8,.4,(Math.random()-.5)*.8);
      p.rotation.y=i*Math.PI/3; g.add(p);
    }
    g.position.set(wx(gx),0,wz(gz));
    props.add(g); grassTufts.push(g);
  }
  function house(gx0,gz0,w,d,wall,roof){
    const cx=wx(gx0+(w-1)/2), cz=wz(gz0+(d-1)/2);
    const base=box(w*TILE,2.6,d*TILE,wall,cx,1.3,cz);
    const prism=new THREE.Mesh(new THREE.CylinderGeometry(0.01,w*TILE*.78,1.6,4,1),M(roof));
    prism.position.set(cx,3.4,cz); prism.rotation.y=Math.PI/4;
    prism.scale.set(1,1,d/w*1.0); prism.castShadow=true; props.add(prism);
    // door + windows
    box(1.1,1.8,.15,0x4e342e,cx,0.9,cz+d*TILE/2+.02);
    box(1,1,.15,0xb3e5fc,cx-2,1.6,cz+d*TILE/2+.02);
    box(1,1,.15,0xb3e5fc,cx+2,1.6,cz+d*TILE/2+.02);
    // sign
    block(gx0,gz0,gx0+w-1,gz0+d-1);
    return {x:cx, z:cz, w:w*TILE, d:d*TILE};
  }
  function sign(gx,gz,text){
    box(.7,1.0,.18,0x5d4037,wx(gx),.5,wz(gz));
    const s=box(.9,.6,.1,0xfff9c4,wx(gx),1.1,wz(gz));
    s.userData.sign=text;
  }

  // ---- border forest ----
  for(let x=0;x<MW;x++){ for(const z of [0,1,MH-2,MH-1]){ tree(x,z,1.1);} }
  for(let z=0;z<MH;z++){ for(const x of [0,1,MW-2,MW-1]){ tree(x,z,1.1);} }
  block(0,0,MW-1,1); block(0,MH-2,MW-1,MH-1); block(0,0,1,MH-1); block(MW-2,0,MW-1,MH-1);
  // route walls: trees flanking route 1 except path
  for(let z=14;z<=27;z++){
    for(const x of [13,14,33,34]) if(!(x>=22&&x<=25)) tree(x,z,0.9);
    // extra scattered
    if(z%3===0){ tree(8+(z%5),z,.8); tree(39-(z%4),z,.8); }
  }
  // keep path walkable
  for(let z=2;z<MH-2;z++) for(let x=22;x<=25;x++) blocked[x][z]=false;

  // ---- buildings ----
  const redHouse = house(16,35,4,3,0xf5f5f5,0xe53935);
  const blueHouse = house(19,35,3,3,0xe3f2fd,0x1e88e5);
  const lab = house(28,37,5,4,0xfff3e0,0x2e7d32);
  const center = house(16,5,5,4,0xffffff,0xe53935);
  const mart = house(28,5,4,3,0x1e88e5,0xffeb3b);
  const gym = house(27,10,6,4,0xb0bec5,0x37474f);
  // gym sign + doors blocked already; add porch mats
  const mat = (c,x,z)=>{ const m=new THREE.Mesh(new THREE.PlaneGeometry(2,1.2),new THREE.MeshStandardMaterial({color:c})); m.rotation.x=-Math.PI/2; m.position.set(x,.02,z); scene.add(m); };
  mat(0xe53935, wx(18), wz(9)+2.2); mat(0x1e88e5, wx(30), wz(8)+2.0); mat(0xffeb3b, wx(30), wz(14)+2.4);

  sign(21,33,'PALLET TOWN\nShades of your journey await!');
  sign(21,27,'ROUTE 1\nTall grass: wild POKéMON!');
  sign(24,13,'VIRIDIAN CITY\nGym Leader BROCK awaits!');
  sign(26,9,'VIRIDIAN GYM\nRock-solid trainer!');

  for(let x=15;x<=21;x++) fence(x,34);
  for(let x=27;x<=33;x++) fence(x,34);
  lamp(22,32); lamp(25,32); lamp(22,14); lamp(25,14); lamp(20,9); lamp(29,9);

  for(let i=0;i<40;i++) flowerPatch(15+Math.floor(Math.random()*20), 35+Math.floor(Math.random()*6), [0xff5252,0xffeb3b,0xffffff][i%3]);
  // pond collision
  block(5,42,14,46); block(6,5,10,8);
  // water mesh animated
  const waterMat = new THREE.MeshStandardMaterial({color:0x29b6f6, transparent:true, opacity:.85, roughness:.2});
  const pond1 = new THREE.Mesh(new THREE.CircleGeometry(5,20), waterMat);
  pond1.rotation.x=-Math.PI/2; pond1.position.set(wx(9),.05,wz(44)); scene.add(pond1);
  const pond2 = new THREE.Mesh(new THREE.PlaneGeometry(5*TILE,4*TILE), waterMat.clone());
  pond2.rotation.x=-Math.PI/2; pond2.position.set(wx(8),.05,wz(6.5)); scene.add(pond2);

  // tall grass tufts
  for(const [x0,z0,x1,z1] of grassRectsLocal()){
    for(let x=x0;x<=x1;x++)for(let z=z0;z<=z1;z++){
      if(x>=22&&x<=25&&z>=18&&z<=26) continue;
      if(Math.random()<.55) grassTuft(x,z);
    }
  }

  // clouds
  const clouds=[];
  for(let i=0;i<8;i++){
    const cl=new THREE.Group();
    for(let j=0;j<3;j++){ const m=new THREE.Mesh(new THREE.SphereGeometry(2+Math.random()*2,8,6),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.85})); m.position.set(j*3-3,Math.random(),0); cl.add(m); }
    cl.position.set((Math.random()-.5)*120, 28+Math.random()*8, (Math.random()-.5)*120);
    scene.add(cl); clouds.push(cl);
  }

  // ---- NPCs ----
  const npcs=[];
  function npc(name,gx,gz,opts,dialog,opts2={}){
    const m=buildHumanMesh(opts);
    m.position.set(wx(gx),0,wz(gz));
    scene.add(m);
    const n={name,mesh:m,gx,gz,dialog,face:0,wander:opts2.wander||0,baseX:wx(gx),baseZ:wz(gz),t:Math.random()*9,id:opts2.id||name,extra:opts2};
    // block tile unless through
    if(!opts2.noBlock) blocked[gx][gz]=true;
    npcs.push(n); return n;
  }
  npc('MOM',17,34,{shirt:0xe91e63,pants:0x4a148c,cap:0xe91e63},{}, {id:'mom'});
  npc('OAK',30,36,{shirt:0xffffff,pants:0x795548,cap:0x9e9e9e,hair:0x9e9e9e},{},{id:'oak'});
  npc('BLUE',26,32,{shirt:0x1e88e5,pants:0x212121,cap:0x1e88e5},{},{id:'rival'});
  npc('NURSE',18,9,{shirt:0xffffff,pants:0xf48fb1,cap:0xffffff},{},{id:'nurse',noBlock:true});
  npc('CLERK',30,8,{shirt:0xff9800,pants:0x37474f,cap:0xff9800},{},{id:'clerk',noBlock:true});
  npc('BROCK',30,14,{shirt:0xff9800,pants:0x4e342e,cap:0x4e342e,skin:0xc68642},{},{id:'brock'});
  npc('KID',26,39,{shirt:0x4caf50,pants:0x1b5e20,cap:0xffeb3b},{},{wander:3,id:'kid'});
  npc('GRANNY',24,7,{shirt:0x9c27b0,pants:0x212121,cap:0x9c27b0},{},{wander:2,id:'granny'});
  // route blocker oak event position handled in game logic (teleport oak)
  const oakBlock = npcs.find(n=>n.id==='oak');

  // ---- player ----
  const player = buildHumanMesh({shirt:0xe33,pants:0x2233aa,cap:0xe33});
  player.position.set(wx(23),0,wz(41));
  scene.add(player);
  const playerLight = new THREE.PointLight(0xfff2b0, 0, 18);
  playerLight.position.set(0,4,0); player.add(playerLight);

  // ---- battle arena (high in sky) ----
  const arena = new THREE.Group(); arena.position.set(0,220,0); scene.add(arena);
  const plat = new THREE.Mesh(new THREE.CylinderGeometry(14,16,2,24), new THREE.MeshStandardMaterial({color:0xd9b382}));
  plat.receiveShadow=true; arena.add(plat);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(10,.5,10,32), new THREE.MeshStandardMaterial({color:0xe53935}));
  ring.rotation.x=Math.PI/2; ring.position.y=1.1; arena.add(ring);
  const foeAnchor = new THREE.Group(); foeAnchor.position.set(0,1,-6); arena.add(foeAnchor);
  const meAnchor = new THREE.Group(); meAnchor.position.set(0,1,6); arena.add(meAnchor);
  const arenaLight = new THREE.PointLight(0xffffff, 2, 60); arenaLight.position.set(0,12,0); arena.add(arenaLight);
  // pokeball pedestals
  for(const [x,z,c] of [[-6,0,0xe53935],[6,0,0xffffff]]){
    const ped=new THREE.Mesh(new THREE.CylinderGeometry(1.4,1.8,1,12),new THREE.MeshStandardMaterial({color:c}));
    ped.position.set(x,1.5,z); ped.castShadow=true; arena.add(ped);
    const ballTop=new THREE.Mesh(new THREE.SphereGeometry(.55,12,10),new THREE.MeshStandardMaterial({color:0xe53935,roughness:.3}));
    ballTop.position.set(x,2.3,z); ballTop.castShadow=true; arena.add(ballTop);
    const ballBand=new THREE.Mesh(new THREE.CylinderGeometry(.57,.57,.18,12),new THREE.MeshStandardMaterial({color:0x222222}));
    ballBand.position.set(x,2.3,z); arena.add(ballBand);
  }
  let foeModel=null, meModel=null;
  function setBattleModels(foeSpecies, meSpecies){
    clearBattleModels();
    if(foeSpecies){ foeModel=buildPokemonMesh(foeSpecies); foeModel.position.copy(foeAnchor.position); foeModel.rotation.y=0; foeModel.scale.multiplyScalar(1.6); arena.add(foeModel); }
    if(meSpecies){ meModel=buildPokemonMesh(meSpecies); meModel.position.copy(meAnchor.position); meModel.rotation.y=Math.PI; meModel.scale.multiplyScalar(1.6); arena.add(meModel); }
  }
  function clearBattleModels(){
    for(const m of [foeModel,meModel]) if(m) arena.remove(m);
    foeModel=meModel=null;
  }

  // camera rig
  const rig = { yaw: 0, dist: 11, h: 7, battle: false };
  const camTarget = new THREE.Vector3();
  function updateCamera(dt, px, pz, battleMode){
    if(battleMode){
      const t = performance.now()/1000;
      const cx = Math.sin(t*.25)*10, cz = 14+Math.cos(t*.25)*3;
      camera.position.set(cx, 228, cz);
      camera.lookAt(0, 222.5, 0);
      return;
    }
    const want = rig;
    const tx = px - Math.sin(want.yaw)*want.dist;
    const tz = pz - Math.cos(want.yaw)*want.dist;
    camera.position.lerp(new THREE.Vector3(tx, want.h, tz), Math.min(1, dt*5));
    camTarget.set(px, 1.5, pz);
    camera.lookAt(camTarget);
    // keep sun following player for shadows
    sun.position.set(px+40, 60, pz+20);
    sun.target.position.set(px,0,pz); sun.target.updateMatrixWorld();
  }

  const clock = new THREE.Clock();
  function animate(dt, t, playerMoving, inBattle){
    // grass sway
    for(let i=0;i<grassTufts.length;i+=2){
      const g=grassTufts[i];
      g.rotation.y = Math.sin(t*2+i)*0.15;
    }
    // clouds drift
    for(const c of clouds){ c.position.x += dt*1.2; if(c.position.x>80) c.position.x=-80; }
    // water shimmer
    pond1.position.y = .05+Math.sin(t*2)*.02;
    // npc bob + wander
    for(const n of npcs){
      n.t += dt;
      n.mesh.position.y = Math.abs(Math.sin(n.t*3))*.06;
      n.mesh.rotation.y = n.face + Math.sin(n.t*.7)*.15;
      if(n.wander && !inBattle){
        n.mesh.position.x = n.baseX + Math.sin(n.t*.3)*n.wander;
        n.mesh.position.z = n.baseZ + Math.cos(n.t*.23)*n.wander;
      }
      const aL=n.mesh.userData.armL, aR=n.mesh.userData.armR;
      if(aL){ aL.rotation.x=Math.sin(n.t*3)*.4; aR.rotation.x=-Math.sin(n.t*3)*.4; }
    }
    // player limb swing
    if(playerMoving){
      const s=Math.sin(t*10);
      player.userData.armL.rotation.x=s*.8; player.userData.armR.rotation.x=-s*.8;
    } else {
      player.userData.armL.rotation.x*=.9; player.userData.armR.rotation.x*=.9;
    }
    // battle models idle
    for(const m of [foeModel,meModel]) if(m){
      m.position.y = 1 + Math.abs(Math.sin(t*3+m.position.x))*.35;
      if(m.userData.wings) for(const w of m.userData.wings) w.rotation.y = Math.sin(t*12)*.5;
      if(m.userData.flame) m.userData.flame.scale.setScalar(1+Math.sin(t*9)*.15);
    }
  }

  function makeGroundTexture(){
    const S=1024, c=document.createElement('canvas'); c.width=c.height=S;
    const g=c.getContext('2d'); const px=S/MW;
    for(let x=0;x<MW;x++)for(let z=0;z<MH;z++){
      let col=((x+z)%2===0)?'#66b455':'#5fae4e';
      if(x>=22&&x<=25) col='#d9b382';
      if(z>=34&&z<=42&&x>=14&&x<=34&&!(x>=22&&x<=25)) col=((x+z)%2?'#7cc45e':'#74bd58');
      if(z>=4&&z<=13&&x>=14&&x<=34&&!(x>=22&&x<=25)) col=((x+z)%2?'#7cc45e':'#74bd58');
      g.fillStyle=col; g.fillRect(x*px,z*px,px+1,px+1);
    }
    const rects=[[16,19,21,26],[26,19,31,26],[15,15,21,17],[26,15,32,17],[8,6,10,12],[37,6,40,12]];
    for(const [x0,z0,x1,z1] of rects) for(let x=x0;x<=x1;x++)for(let z=z0;z<=z1;z++){
      if(x>=22&&x<=25&&z>=18&&z<=26) continue;
      g.fillStyle='#3d8b36'; g.fillRect(x*px,z*px,px+1,px+1);
      g.fillStyle='#4da543'; g.fillRect(x*px+px*.2,z*px+px*.2,px*.6,px*.6);
    }
    // plaza stones
    g.fillStyle='#cfcfcf';
    for(let x=22;x<=25;x++)for(let z=34;z<=42;z+=2) g.fillRect(x*px+4,z*px+4,px-8,px-8);
    const t=new THREE.CanvasTexture(c); t.colorSpace=THREE.SRGBColorSpace; t.anisotropy=4;
    return t;
  }
  function grassRectsLocal(){ return [[16,19,21,26],[26,19,31,26],[15,15,21,17],[26,15,32,17],[8,6,10,12],[37,6,40,12]]; }

  function resize(){ camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); }
  addEventListener('resize',resize); resize();

  return {
    scene, camera, renderer, blocked, npcs, oakBlock, player, rig,
    updateCamera, animate, clock, setBattleModels, clearBattleModels,
    foeAnchor, meAnchor, arena, grassTufts,
    isBlockedAt(x,z){
      const gx=gxOf(x), gz=gzOf(z);
      if(gx<2||gz<2||gx>MW-3||gz>MW-3) return true;
      // circle radius check neighbouring tiles
      for(let ax=gx-1;ax<=gx+1;ax++)for(let az=gz-1;az<=gz+1;az++){
        if(blocked[ax]?.[az]){
          const cx=wx(ax), cz=wz(az);
          if(Math.abs(x-cx)<TILE*.72 && Math.abs(z-cz)<TILE*.72) return true;
        }
      }
      // npc dynamic block
      for(const n of npcs){
        if(n.id==='nurse'||n.id==='clerk') continue;
        const dx=x-n.mesh.position.x, dz=z-n.mesh.position.z;
        if(dx*dx+dz*dz < .8) return true;
      }
      return false;
    }
  };
}
