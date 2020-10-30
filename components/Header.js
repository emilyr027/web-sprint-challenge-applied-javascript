// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container



//this variable represents the header section of the HTML
const headerContainer = document.querySelector('.header-container');


//Function to create parts of header
function header() {
    //Identify elements 
    const headerDiv = document.createElement('div');
    const span1 = document.createElement('span');
    const header1 = document.createElement('h1');
    const span2 = document.createElement('span');

    //Add classes    
    headerDiv.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');

    //Add content
    span1.textContent = 'MARCH 28, 2020';
    header1.textContent = 'Lambda Times';
    span2.textContent = '98°';

    //Gave structure by placing children
    headerDiv.appendChild(span1);
    headerDiv.appendChild(header1);
    headerDiv.appendChild(span2);

    return headerDiv;
}

headerContainer.appendChild(header());