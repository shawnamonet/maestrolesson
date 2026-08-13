// 1. Grab the elements we care about
const countryInput = document.querySelector('#country-input');
const updateButton = document.querySelector('#update-btn');
const countryHeading = document.querySelector('.country-card h2');

updateButton.addEventListener('click', function () {
  const newCountryName = countryInput.value;   // read the input

  countryHeading.textContent = newCountryName; // update the <h2>

  countryInput.value = '';      // clear the box
  countryInput.focus();         // put cursor back in
});