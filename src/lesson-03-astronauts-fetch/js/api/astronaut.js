const BASE_URL = "https://lldev.thespacedevs.com/2.3.0";

// API functions here
// async function getAstronautList() {
// OR, use an arrow function
const getAstronautList = async () => {
  const endpoint = `${BASE_URL}/astronauts?mode=list&nationality=Canadian`;
  const res = await fetch(endpoint);
  const json = await res.json();
  return json;
}

export { getAstronautList };