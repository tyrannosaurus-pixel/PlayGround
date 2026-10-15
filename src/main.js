import './style.css';
import { createKanto } from './kanto.js';
import { initGame } from './game.js';

const canvas = document.getElementById('scene');
let K;
try {
  K = createKanto(canvas);
  const api = initGame(K);
  window.__game = api;
  window.__kanto = K;
  document.getElementById('loading').style.display = 'none';
  // auto camera intro sweep
  K.rig.yaw = 0.6;
} catch (err) {
  console.error(err);
  document.getElementById('loading').textContent = 'FAILED TO START 3D: ' + err.message;
}
