function f(){
    let value = Math.floor(Math.random()*100,2);
    return value;
}
let arr = [f(), f(), f()];
console.log(arr);

function g(){
    let value = Math.random();

    function d(){
        debugger;
    }
    return d;
}

let d = g();
d();