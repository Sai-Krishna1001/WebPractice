// change background
document.body.style.background = 'red'
setTimeout(() => document.body.style.background = '', 3000);

const bodyElement = document.body;
const changeTextButton = document.getElementById("changeTextButton");

changeTextButton.addEventListener('click', () => {
    bodyElement.innerText = "Text changed using Javascript";
});
