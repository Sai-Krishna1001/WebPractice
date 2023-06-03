
// Changing text content
var elementPara = document.getElementById('para');
elementPara.textContent = "New text content";

// Changing HTML content
var elementDiv = document.getElementById('div');
elementDiv.innerHTML = '<h2>New HTML content</h2>';

// Changing Attribute Values
var elementImage = document.getElementById('myImage');
elementImage.setAttribute('src','smiling-emoticon-square-face.png');

// Adding and Removing CSS Classes
var elementClasses = document.getElementById('para2');
elementClasses.classList.add('new-class');
elementClasses.classList.remove('old-class');

// Appending and Removing Child Elements
var parentElement = document.getElementById('parent');
    // Appending a new child element
var newElement = document.createElement('div');
newElement.textContent = 'New child element';
parentElement.appendChild(newElement);
    // Removing a child element
var childElement = document.getElementById('child');
parentElement.removeChild(childElement);

// Modifying Element Styles
var elementModifyStyle = document.getElementById('modifyStyle');
elementModifyStyle.style.backgroundColor = 'red';
elementModifyStyle.style.fontSize = '30px';
elementModifyStyle.style.color = 'yellow';

// Event Handling
var button = document.getElementById('myButton');
button.addEventListener('click', function(event){
    event.preventDefault();
    alert('Button clicked!');
})
