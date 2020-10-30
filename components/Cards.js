import axios from 'axios';

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cards = document.querySelector('.cards-container');

function createCards(obj){
    //Delcared variables
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorsName = document.createElement('span');

    //Added classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //Added content
    headline.textContent = `${obj.headline}`;
    img.src = obj.authorPhoto;
    author.textContent = `By: ${obj.authorName}`;

    //Gave structure by placing children
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(authorsName);

    //Created eventListener to console.log the headline when clicked
    card.addEventListener('click', (e) => {
        console.log(`${obj.headline}`);
    })

    return card;
};





//Used axios to call the data
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(function(value){
        //Declared variables that used specific data from the object
        const javaScriptArt = value.data.articles.javascript;
        const bootstrapArt = value.data.articles.bootstrap;
        const techArt = value.data.articles.technology;
        const jQueryArt = value.data.articles.jquery;
        const nodeArt = value.data.articles.node;

        javaScriptArt.forEach(obj => {
            //create a card using the createCards function for the specific category of article
            const card = createCards(obj);
            cards.appendChild(card);
            console.log(`JavaScript is working`);
        });

        bootstrapArt.forEach(obj => {
            const card = createCards(obj);
            cards.appendChild(card);
            console.log(`Bootstrap is working`);
        });

        techArt.forEach(obj => {
            const card = createCards(obj);
            cards.appendChild(card);
            console.log(`Technology is working`);
        });

        jQueryArt.forEach(obj => {
            const card = createCards(obj);
            cards.appendChild(card);
            console.log(`jQuery is working`);
        });

        nodeArt.forEach(obj => {
            const card = createCards(obj);
            cards.appendChild(card);
            console.log(`Node is working`);
        });
    });
    .catch(error => {
        console.log(error);
    });



