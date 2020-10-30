// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const { default: Axios } = require("axios");

Axios.get('https://lambda-times-api.herokuapp.com/topics')
    .then(response => {
        const articleTopics = Array.from(response.data.topics);
        articleTopics.forEach(element => {
            createNewTab(element)
        });
    })
    .catch(reject => {
        console.log('Error', reject);
    })

const topics = document.querySelector('.topics');

function createNewTab(item){
    const newTabDiv = document.createElement('div');
    newTabDiv.classList.add('tab');
    newTabDiv.textContent = `${item}`;
    topics.appendChild(newTabDiv);

    return newTabDiv;
};