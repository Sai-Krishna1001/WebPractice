
// window object
console.log(`window width:  ${window.innerWidth}`);
window.alert('Hello, world');

// history object
console.log(`number of URLs in the browser history: ${history.length}`);
history.back(); // go back to the pervious page

// navigator object
console.log(navigator.userAgent); // user agent string of the browser
console.log(navigator.platform); // operating system platform

// screen object
console.log(screen.width); // width of the screen in pixels
console.log(screen.colorDepth); // color depth of the screen

// document object
console.log(document.title); // title of the document
const element = document.getElementById('para'); // Access element by ID
element.innerHTML = '<h2>New content</h2>'; // modify element's html content

// location object 
console.log(location.href); // current url of the window
// location.assign('https://youtube.com'); // navigate to a new url
// console.log(location.hostname); // hostname of ther current url

// event object
document.getElementById('click').addEventListener('click',function(event){
    console.log(event.target); // element that triggered the event
    console.log(event.type); // type of event(e.g "click")
    event.preventDefault();
})



