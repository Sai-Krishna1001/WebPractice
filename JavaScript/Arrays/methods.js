
const nums = [1,2,3,4,5,6];

// forEach()
nums.forEach(item => {
    console.log(item);
});

// includes()
console.log(nums.includes(2));
console.log(nums.includes(7));

// filter()
const filtered = nums.filter(num => num>3);
console.log(filtered);

// map()
const squares = nums.map(num => num*num);
console.log(squares); 

// reduce()
const sum = nums.reduce((total, value) => total + value, 0);
console.log("sum = " + sum); // sum = 21

// some()
const largeNum = nums.some(num => num>4);
console.log(largeNum); // true

const smallNum = nums.some(num => num<=0);
console.log(smallNum); // false

// every()
const greaterFour = nums.every(num => num>4);
console.log(greaterFour); // false

const lessTen  = nums.every(num => num < 10);
console.log(lessTen); //true

// sort()
const alpha = ['e', 'a', 'c', 'u', 'y'];
const numbers = [1,2,12,10, 30,22,19,100];
// sort nums numerically in descending order
descOrder = numbers.sort((a,b) => a > b ? -1 : 1);
console.log(descOrder);
// sort nums alphabetically
alphaSort = numbers.sort();
console.log(alphaSort);

ascOrder = alpha.sort((a,b) => a > b ? 1 : -1);
console.log(ascOrder);

// from()
const name = 'krishna';
const nameArray = Array.from(name);
console.log(name); // krishna
console.log(nameArray); // ['k', 'r', 'i','s', 'h', 'n', 'a']

// of()
const arr = Array.of(1,2,3,4,5);
console.log(arr);

