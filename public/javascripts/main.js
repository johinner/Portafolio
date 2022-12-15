import { createParticles } from './partials/home.js';
import { showBars } from './partials/about.js';
import { menuFixer, transitionSequence} from './partials/observer.js';
import {fetchData} from './partials/proyects.js';

const API = 'https://json-projects.up.railway.app/';

window.onload = () => {
  createParticles();
  showBars();
  menuFixer();
  transitionSequence();
  fetchData(API);
};

