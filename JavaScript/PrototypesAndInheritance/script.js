/*Prototypes and Inheritance: 
JavaScript uses prototypes for object inheritance. 
Each object has a prototype, which serves as a template 
for creating new objects. Prototypal inheritance
allows objects to inherit properties and methods from their prototypes.
*/

// "prototype" refers to an object that is associated with another object and serves as a blueprint or template for creating new objects. Every object in JavaScript has an implicit reference to its prototype, which is stored in the prototype property.
// The prototype object contains properties and methods that are shared among all objects created from it through prototypal inheritance. 

// create a prototype object
var animalPrototype = {
    sound: '',
    makeSound: function(){
        console.log(this.sound);
    }
};

// create a new object using the prototype
var dog = Object.create(animalPrototype);
dog.sound = 'Woof!';

// Access properties and methods of the object and its prototype
console.log(dog.sound);
dog.makeSound();

// Modify the prototype to add new behavior
animalPrototype.eat = function(){
    console.log('Eating...');
};

// New objects created from the prototype will inherit the added behavior
var cat = Object.create(animalPrototype);
cat.sound = 'Meow';
cat.makeSound();
cat.eat();