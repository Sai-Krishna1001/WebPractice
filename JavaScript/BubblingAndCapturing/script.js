for(let elem of document.querySelectorAll('*')){
    elem.addEventListener('click', e => alert(`Capturing: ${elem.tagName}`));
    elem.addEventListener('click', e => alert(`Bubbling: ${elem.tagName}`));
}