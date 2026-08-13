console.log("JS file loaded!");

const countryInput = document.querySelector('#country-input');
const updateButton = document.querySelector('#update-btn');
const countryHeading = document.querySelector('.country-card h2');

async function updateCountryCard(countryName) {
  console.log("Updating card for:", countryName);
}

updateButton.addEventListener('click', () => {
  const countryName = countryInput.value.trim();
  updateCountryCard(countryName);
});