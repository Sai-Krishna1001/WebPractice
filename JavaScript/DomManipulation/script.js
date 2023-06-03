
// Accessing elements
var headingElement = document.getElementById('heading');
var buttonElement = document.getElementById('btn');

// Changing element content
headingElement.textContent = 'Updated Heading'


// Changing element styles
buttonElement.style.backgroundColor = 'red';
buttonElement.style.color = 'white';

// Adding event listener
buttonElement.addEventListener('click', function(){
    headingElement.style.fontSize = '24px';
})