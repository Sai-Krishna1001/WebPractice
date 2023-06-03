// SPREAD OPERATOR

// 1. concatenating arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const concatenated = [...arr1, ...arr2];
console.log(concatenated);

// 2. copying objects
const obj1 = {name: 'krishna', age: 23};
const obj2 = {...obj1};
console.log(obj2);
console.log(obj1 === obj2); // o/p: false (obj2 is a new object)

// 3. Merging objects
const obj3 = {name: 'sai'};
const obj4 = {age: 22};
const merged = {...obj3, ...obj4};
console.log(merged);

// 4. passing array elements as function arguments
function sum(a,b,c){
    return a+b+c;
}
const numbers = [1,2,3];
console.log(sum(...numbers));

// 5. creating clones of arrays and objects
//The spread operator can be used to create clones of arrays and objects, 
// enabling you to modify the cloned version without affecting the original.

// clone an array
const originalArray = [1,2,3];
const clonedArray = [...originalArray];
clonedArray.push(4);
console.log(originalArray);
console.log(clonedArray);

// cloning an object
const originalObject = {name: 'John', age: 25};
const clonedObject = {...originalObject};
clonedObject.name = 'Alice';
console.log(originalObject);
console.log(clonedObject);

// cloning an array of objects
const originalArray2 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
  ];
  const clonedArray2 = [...originalArray2];
  
  clonedArray2[0].name = 'Kate';
  
  console.log(originalArray2); // Output: [ { id: 1, name: 'John' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' } ]
  console.log(clonedArray2); // Output: [ { id: 1, name: 'Kate' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' } ]
  