// main.js

// Import CSS files, Vite will bundle them automatically
import 'bootstrap/dist/css/bootstrap.min.css';
// Import custom JS modules
import { getAstronautList } from './api/astronaut.js';
import { renderAstronautListItem } from './dom/astronaut.js';

// Wrap the code in an async function to use top-level
// await (not necessary since ES2022 [13th version], but 
// kept here for compatibility)
async function app() {
  let astronauts = await getAstronautList();
  console.log(astronauts);
}

// Run the application
app();