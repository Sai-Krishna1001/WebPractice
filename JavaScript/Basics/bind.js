//bind: returns a new function, allowing you to pass any number of arguments

function greet(name){
    console.log(`Hello, ${name}! I'm ${this.name}.`);
}

const person = {name: 'John'};

const greetPerson = greet.bind(person);
greetPerson('Alice');