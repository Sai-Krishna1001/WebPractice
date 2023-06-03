
// 1. global scope
// In the global scope, outside of any function, this refers to the global object, which is window in a browser environment and global in Node.js.
console.log(this === window); //true

// 2. function context
// In a regular function, this depends on how the function is called. If the function is called as a method of an object, this refers to the object itself.
const person = {
    name: 'John',
    sayHello: function() {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
person.sayHello(); // Output: Hello, John!

// 3. constructor functions
// When a function is used as a constructor with the new keyword, this refers to the newly created object instance.
class Person{
    constructor(name){
        this.name = name;
    }
    
}
const john = new Person('krishna');
console.log(john.name);

// 4. explicitly binding this
// You can explicitly bind this to a specific object using the call, apply, or bind methods of a function. This allows you to control the value of this in a function, regardless of how it is called.
function sayHello(){
    console.log(`Hello, ${this.name}`);
};
const user = {name: 'mahesh'};
sayHello.call(user);

// 5. Arrow functions
// Arrow functions do not have their own this value. Instead, they lexically capture the this value from the surrounding scope at the time of their creation.
const person2 = {
    name: 'John',
    sayHello: () => {
      console.log(`Hello, ${this.name}!`);
    }
  };
  
  person2.sayHello(); // Output: Hello, undefined!
  