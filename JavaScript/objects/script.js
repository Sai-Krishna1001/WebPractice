// Different ways to create objects in javascript
//===================================================================
// 1. var object = new Object();            -->Object constructor
// 2. var object = Object.create(null);     -->Object's create method
// 3. var object = {};                      -->Object literal syntax
// 4. function constructor
// function Person(name){
//     var object = {};
//     object.name = name;
//     object.age = 21;
//     return object;
// }
// var object = new Person("krishna");
// 5. function constructor with prototype
// function Person(){}
// Person.prototype.name = "sai";
// var object = new Person();


// 6. ES6 Class syntax
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// var object = new Person("gedda");

// 7. singleton pattern
// var object = new function(){
//     this.name = "Sudher";
// }

const parent = {
    parentProp: 'Parent Property'
};
const child = Object.create(parent);
child.childProp = 'Child Property';
console.log(child.childProp);
console.log(child.parentProp);