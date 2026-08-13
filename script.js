const form = document.querySelector('#search-form');
const input = document.querySelector('#search-input');
const resultsList = document.querySelector('#results');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const query = input.value.trim();
  console.log('User searched for:', query);

  if (!query) {
    console.log('Empty search, skipping fetch');
    return;
  }

  const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;
  console.log('About to fetch:', url);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error('HTTP error:', response.status);
      return;
    }

    const data = await response.json();
    console.log('JSON data:', data);
    console.log('Number of docs:', data.docs.length);
    // clear old results
resultsList.innerHTML = '';

for (const book of data.docs) {
  const li = document.createElement('li');
  const title = book.title || 'No title';
  const author = book.author_name ? book.author_name[0] : 'Unknown author';

  li.textContent = `${title} — ${author}`;
  resultsList.appendChild(li);
}
// reset input and focus for next search
input.value = '';
input.focus();
  } catch (error) {
    console.error('Network error:', error);
  }
});