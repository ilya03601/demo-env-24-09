import { sum } from './sum.js';

document.querySelector('#app').innerHTML = `<h1>Demo Env</h1><h2>${sum(10, 10)}</h2>`;
