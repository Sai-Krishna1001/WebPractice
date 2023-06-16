// var has no block level scope
if(true){
    var test = true;
}
console.log(test);

// let has block level scope
if(true){
    let flag = false;
}
// console.log(flag); // get error: flag is not defined

// we cannot redclare same variable using let, but we can redaclare variable using var
var a = 3;
var a = 4;
let b = 3;
// let b = 4;

(function(){
    var message = "hello";
    console.log(message);
})();