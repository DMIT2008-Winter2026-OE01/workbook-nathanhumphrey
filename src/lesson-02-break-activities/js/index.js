/*
HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

// Use `const` since these variables are not expected to change
// Access elements in the DOM using the `querySelector` function
const topicForm = document.querySelector('.new-topic-form');
const topicsList = document.querySelector('.topics-list');

/**
 * Adds a new topic to a list.
 * @param {string} topicName - the new topic to add
 * @param {HTMLElement} topicsListElement - the existing list to add to
 */
function addTopicToPage(topicName, topicsListElement) {
  const newTopicItem = `<li class="list-group-item">
      ${topicName}
    </li>`;
    topicsListElement.innerHTML += newTopicItem;
}

topicForm.addEventListener('submit', (event) => {
  // Do not submit the form and reload the page!
  event.preventDefault();

  // Capture both the input element and its value
  const input = topicForm.elements['new-topic'];
  const inputValue = input.value;

  // Using Bootstrap's ServerSide validation classes for UI updates
  if (inputValue === '') {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
    // Input is good, add it to the page
    addTopicToPage(inputValue, topicsList);
  }
});