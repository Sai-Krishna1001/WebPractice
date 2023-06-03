//apply: The apply method is similar to call, but it accepts arguments as an array.

function greet(name){
    console.log(`Hello, ${name}! I'm ${this.name}.`);
}

const person = {name: 'John'};

greet.apply(person,['Alice']);