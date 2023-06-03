
// Closures are a powerful concept in JavaScript that allow functions 
// to retain access to variables from their outer scope, 
// even after the outer function has finished executing.
function outerFunction(){
    var outerVar = "I am a outer variable";
    function innerFunction(){
        console.log(outerVar);
    }
    return innerFunction;
}
var closure = outerFunction();
closure();

// second example
function makeCounter(){
    let count = 0;
    return function(){
        return count++;
    }
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1