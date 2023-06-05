
document.addEventListener('DOMContentLoaded', function(){
    // perform actions when the DOM content has been loaded
    console.log("DOM content loaded and parsed");
});

window.addEventListener('load', function(){
    // perform actions when the page has finished loading
    console.log("page loaded");
});

window.addEventListener('scroll', function(){
    // perform actions when the page is scrolled
    console.log('scrolling the page');
})