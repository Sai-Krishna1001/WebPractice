
//call: The call method allows you to invoke a function with a specified this value and pass arguments individually. 

function greet(name){
    console.log(`Hello, ${name}! I'm ${this.name}.`);
}

const person = {name:'John'};

greet.call(person, 'Alice');