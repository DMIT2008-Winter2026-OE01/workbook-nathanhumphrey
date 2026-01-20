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
  let astronautResponse = await getAstronautList();
  
  console.log(astronautResponse); // debug

  // Traditional object property access
  // const results = astronauts.results;
  // Use destructuring instead:
  const { results: astronauts } = astronautResponse;
  
  // Get the list
  const astronautList = document.querySelector('.astronaut-list');
  astronauts.forEach((astronaut) => {
    renderAstronautListItem(astronaut, astronautList);
  });

}

// Run the application
app();