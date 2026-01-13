/*
HTML for list topic list item
<li class="list-group-item">
    NEW TOPIC HERE
</li>
*/

const topicForm = document.querySelector('.new-topic-form');
const topicsList = document.querySelector('.topics-list');

function addTopicToPage(topicName, topicsListElement) {
  const newTopicItem = `<li class="list-group-item">
      ${topicName}
    </li>`;
    topicsListElement.innerHTML += newTopicItem;
}

topicForm.addEventListener('submit', (event) => {
  // Do not submit the form and reload the page!
  event.preventDefault();

  const input = topicForm.elements['new-topic'];
  const inputValue = input.value;

  if (inputValue === '') {
    input.classList.add('is-invalid');
  } else {
    input.classList.remove('is-invalid');
    addTopicToPage(inputValue, topicsList);
  }
});