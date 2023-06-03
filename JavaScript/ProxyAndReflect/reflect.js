
// Reflect is a built-in object that provides methods for performing 
// common object operations in a more controlled and flexible way.
//  It acts as a collection of static methods, making it easier to 
// perform operations such as property access, method invocation, and
//  object creation.

const person = {
    name: 'John',
    age: 30
}

console.log(Reflect.get(person, 'name'));

Reflect.set(person, 'age', 35);
console.log(person.age);

// Reflect.construct method is used to create a new object using the Array constructor with the provided arguments.
const newObj = Reflect.construct(Array, [1,2,3,4]);
console.log(newObj);