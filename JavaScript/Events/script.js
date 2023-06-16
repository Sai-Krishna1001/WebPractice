/*
Event Object:
event.type
event.currentTarget
event.clientX / event.clientY
*/

let element = document.getElementById('elem');
class Menu{
    handleEvent(event){
        switch(event.type){
            case 'mousedown':
                element.innerHTML = "Mouse Button Pressed";
                break;
            case 'mouseup':
                element.innerHTML = "Mouse Button Released";
                break;
        }
    }
}
let menu = new Menu();
element.addEventListener('mousedown',menu);
element.addEventListener('mouseup',menu);