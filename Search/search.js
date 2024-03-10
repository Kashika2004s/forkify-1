const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '7c902ebf';
const APP_KEY = '45aacb7b64a7be3684900d236c14769f'; // Remove the extra character at the end

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI(searchQuery);
});

async function fetchAPI(searchQuery) {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`;
    
    const response = await fetch(baseURL);
    const data = await response.json(); // Parse the response as JSON
    generateHTML(data.hits);
    console.log(data); // Do something with the data, like displaying it on the webpage
}
function generateHTML(results) {
    let generatedHTML = '';
    results.slice(0, 6).forEach(result => {
        generatedHTML +=
            `
            <div class="item">
            <img src="${result.recipe.image}" alt="">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="buttonrecipe" href="${result.recipe.url}">View Recipe</a>
            </div>
            <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
            </div>
            `;
    });
    searchResultDiv.innerHTML = generatedHTML;
}