
// removing elements from an array
const colors = ['red','green', 'blue', 'yellow', 'orange'];
const removedColors = colors.splice(1,2);
console.log(removedColors);
console.log(colors);

// replacing elements in an array
const numbers = [1,2,3,4,5];
const replacedNumbers = numbers.splice(2,2,6,7);
console.log(numbers);

// adding elements to an array
const fruits = ['apple','banana','cherry'];
fruits.splice(2,0,'durian','elderberry');
console.log(fruits);

// using negative indices
const letters = ['a','b','c','d','e'];
const removedLetters = letters.splice(-3,2);
console.log(removedLetters); // Output: ['c', 'd']
console.log(letters); // Output: ['a', 'b', 'e']