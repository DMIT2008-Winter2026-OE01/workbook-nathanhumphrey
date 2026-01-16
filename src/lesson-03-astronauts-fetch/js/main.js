// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAstronautList } from './api/astronaut.js';

async function app() {
  let astronauts = await getAstronautList();
  console.log(astronauts);
}

app();