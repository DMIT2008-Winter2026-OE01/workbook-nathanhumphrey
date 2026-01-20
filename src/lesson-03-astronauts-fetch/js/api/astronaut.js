const BASE_URL = "https://lldev.thespacedevs.com/2.3.0";

// API functions here
// async function getAstronautList() {
// OR, use an arrow function

/**
 * Fetches and returns a list of Canadian astronauts
 * @returns {Promise<any>} a list of astronaut objects
 */
const getAstronautList = async () => {
  const endpoint = `${BASE_URL}/astronauts?mode=list&nationality=Canadian`;
  // First, capture the response object
  const res = await fetch(endpoint);
  // Then, extract the JSON from the response object
  const json = await res.json();
  // Finally, return the JSON data
  return json;
}

// Export functions here
export { getAstronautList };