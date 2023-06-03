
// perform an action when the button is clicked;
function clickevent(){
    document.write('This is krishna');
}

// 
document.getElementById('button').addEventListener('click',function(){
    console.log('button clicked');
});


const div = document.getElementById('myDiv');

div.addEventListener('mouseover', function(){
    // perform an action when the mouse pointer is over the element
    console.log('Mouse over');
});

div.addEventListener('mouseout', function(){
    // perform an action when the mouse pointer moves out of the element
    console.log('Mouse out');
});

div.addEventListener('mousedown', function(){
    // perform an action when the mouse button is pressed
    console.log('Mouse down');
});

div.addEventListener('mouseup', function(){
    // perform an action when the mouse button is released
    console.log('Mouse up');
});

div.addEventListener('mousemove', function(){
    // perform an action when the mouse pointer moves while holding the button down
    console.log('mouse move')
})