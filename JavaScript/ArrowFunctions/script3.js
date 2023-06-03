
// No arguments Binding: Arrow functions do not have their own arguments object. Instead, they inherit the arguments from the surrounding scope.

// Traditional function expression
function sum(){
    return Array.from(arguments).reduce((total, num) => total+num, 0);
}
console.log(sum(5,4));

// Arrow function with inherited "arguments"
const add = (...args) => args.reduce((total, num) => total+num, 7);
console.log(add(1,2,3,4));