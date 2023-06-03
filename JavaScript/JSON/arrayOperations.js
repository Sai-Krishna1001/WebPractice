const jsonArray = ['apple', 'banana', 'orange'];

console.log(jsonArray[0]); // Output: apple

jsonArray.push('grape');
console.log(jsonArray); // Output: ["apple","banana","orange","grape"]

jsonArray.splice(1, 1);
console.log(jsonArray); // Output: ["apple","orange","grape"]

console.log(jsonArray.length);

jsonArray.sort();
console.log(jsonArray);

