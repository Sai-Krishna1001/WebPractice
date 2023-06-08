// Lodash is a utility library that provides helpful functions for working with arrays, objects, strings, and more. 
// Example: Using Lodash to filter an array:

const lodash = require('lodash');
const numbers = [1,2,3,4,5];
const everNumbers = lodash.filter(numbers, (num)=> num%2===0);

console.log(everNumbers);