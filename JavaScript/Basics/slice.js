

// Extracting a portion of an array
const fruits = ['apple', 'banana', 'cherry', 'durian', 'elderberry'];
const slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ['banana', 'cherry', 'durian']

// Creating a shallow copy of an array
const originalArray = [1,2,3,4,5];
const copiedArray = originalArray.slice();
console.log(copiedArray);

// Extracting the last few elements of an array
const numbers = [1,2,3,4,5];
const lastTwoNumbers = numbers.slice(-2);
console.log(lastTwoNumbers);

// Removing elements from an array
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
const removedColors = colors.slice(0,2).concat(colors.slice(3));
console.log(removedColors); // Output: ['red', 'green', 'yellow', 'orange']
