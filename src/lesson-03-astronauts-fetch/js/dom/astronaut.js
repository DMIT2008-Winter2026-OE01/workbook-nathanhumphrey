/*
HTML of an astronaut list item.
replace the instances that have "THIS FORMAT HERE" with the astronautData.

<li href="#" class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
        <img src="PROFILE THUMBNAIL HERE" class="rounded float-start" alt=""">    
        <h5 class="mb-1">ASTRONAUT NAME (ASTRONAUT STATUS HERE)</h5>
        <small class="float-end">born DATE OF BIRTH HERE</small>
    </div>
    <small>ASTRONAUT NATIONALITY HERE (ASTRONAUT AGENCY NAME)</small>    
    <p class="mb-1">ASTRONAUT BIO HERE </p>
</li>
*/

/**
 * Render a single astronaut list item into an existing list.
 * @param {object} astronautObj - the object of astronaut data
 * @param {HTMLUListElement} listEl - the list to insert the astronaut into
 */
function renderAstronautListItem(
  { agency, bio, date_of_birth: dateOfBirth, image, name, nationality, status },
  listEl,
) {
  const { thumbnail_url: thumbnailUrl } = image;
  const nationalityName = nationality[0].name;
  const { abbrev } = agency;
  const { name: statusName } = status;

  const templateHtml = `<li href="#" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <img src="${thumbnailUrl}" class="rounded float-start" alt="Image of ${name}">    
        <h5 class="mb-1">${name}} (${statusName})</h5>
        <small class="float-end">born ${dateOfBirth}</small>
      </div>
      <small>${nationalityName} (${abbrev})</small>    
      <p class="mb-1">${bio}</p>
    </li>`;

  listEl.innerHTML += templateHtml;
  // Or
  // listEl.insertAdjacentHTML('beforeend', templateHtml);
}

export { renderAstronautListItem };