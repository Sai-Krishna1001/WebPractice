//
// function sum(a,b){ // o/p: 3
//     return a+b;
// }

// function sum(...args){ // o/p: 36
// function sum(a,b,...args){ // o/p: 33
//     let sum = 0;
//     for(let arg of args){
//         sum += arg;
//     }
//     return sum;
// }
// alert(sum(1,2,3,4,5,6,7,8));


// function sum(){
//     alert(arguments.length); // o/p: 8
//     alert(arguments[3]); // o/p: 4
// }
// sum(1,2,3,4,5,6,7,8);

// let arr = [1,5,3];
// let arr2 = [8,2,9,4]
// alert(Math.max(arr))// o/p: NaN
// alert(Math.max(...arr,...arr2)); //o/p: 9

// let str = "Hello"
// alert(Array.from(str))// o/p: H,e,l,l,o
// alert([...str].join("")); // o/p: Hello

// let arr3 = [1,2,3];
// let arrCopy = [...arr3];
// alert(JSON.stringify(arr3) === JSON.stringify(arrCopy)); // true
// alert(arr3 === arrCopy); // false

let obj = {a:1, b:2, c:3};
let objCopy = {...obj}
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(objCopy)));
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true
alert(obj === objCopy); // false
