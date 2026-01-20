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

/*
{
    "id": 5,
    "url": "https://lldev.thespacedevs.com/2.3.0/astronauts/5/",
    "name": "Chris Hadfield",
    "status": {
        "id": 2,
        "name": "Retired"
    },
    "agency": {
        "response_mode": "list",
        "id": 16,
        "url": "https://lldev.thespacedevs.com/2.3.0/agencies/16/",
        "name": "Canadian Space Agency",
        "abbrev": "CSA",
        "type": {
            "id": 1,
            "name": "Government"
        }
    },
    "image": {
        "id": 568,
        "name": "Chris Hadfield official portrait",
        "image_url": "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/media/images/chris_hadfield_image_20220911034200.jpeg",
        "thumbnail_url": "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/media/images/255bauto255d__image_thumbnail_20240305190208.jpeg",
        "credit": "NASA",
        "license": {
            "id": 4,
            "name": "NASA Image and Media Guidelines",
            "priority": 0,
            "link": "https://www.nasa.gov/nasa-brand-center/images-and-media/"
        },
        "single_use": true,
        "variants": []
    },
    "response_mode": "list",
    "type": {
        "id": 2,
        "name": "Government"
    },
    "in_space": false,
    "time_in_space": "P165DT16H19M",
    "eva_time": "PT14H50M",
    "age": 66,
    "date_of_birth": "1959-08-29",
    "date_of_death": null,
    "nationality": [
        {
            "id": 26,
            "name": "Canada",
            "alpha_2_code": "CA",
            "alpha_3_code": "CAN",
            "nationality_name": "Canadian",
            "nationality_name_composed": "Canado"
        }
    ],
    "bio": "Chris Austin Hadfield is a Canadian retired astronaut, engineer, and former Royal Canadian Air Force fighter pilot.\r\nThe first Canadian to walk in space, Hadfield has flown two space shuttle missions and served as commander of the International Space Station.",
    "wiki": "https://en.wikipedia.org/wiki/Chris_Hadfield",
    "last_flight": "2012-12-19T12:12:35Z",
    "first_flight": "1995-11-12T12:30:43Z",
    "social_media_links": [
        {
            "id": 208,
            "social_media": {
                "id": 1,
                "name": "X",
                "url": "https://x.com",
                "logo": {
                    "id": 2320,
                    "name": "X logo",
                    "image_url": "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/media/images/x_logo_image_20250211191027.jpg",
                    "thumbnail_url": "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/media/images/x_logo_image_thumbnail_20250211191027.jpeg",
                    "credit": "X",
                    "license": {
                        "id": 1,
                        "name": "Unknown",
                        "priority": 9,
                        "link": null
                    },
                    "single_use": true,
                    "variants": []
                }
            },
            "url": "https://twitter.com/Cmdr_Hadfield"
        },
        {
            "id": 209,
            "social_media": {
                "id": 2,
                "name": "Instagram",
                "url": "https://instagram.com",
                "logo": {
                    "id": 2322,
                    "name": "Instagram logo",
                    "image_url": "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/media/images/instagram_logo_image_20250211191139.png",
                    "thumbnail_url": "https://thespacedevs-dev.nyc3.digitaloceanspaces.com/media/images/instagram_logo_image_thumbnail_20250211191139.png",
                    "credit": "Instagram",
                    "license": {
                        "id": 1,
                        "name": "Unknown",
                        "priority": 9,
                        "link": null
                    },
                    "single_use": true,
                    "variants": []
                }
            },
            "url": "https://www.instagram.com/colchrishadfield/"
        }
    ]
},

*/
