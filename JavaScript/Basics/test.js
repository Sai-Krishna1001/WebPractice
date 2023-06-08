var animals = [
    { animal: 'Horse', name: 'Henry', age: 43 },
    { animal: 'Dog', name: 'Fred', age: 13 },
    { animal: 'Cat', name: 'Frodo', age: 18 }
];
 
console.table(animals);

const person = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'New York',
    },
  };
  
  console.log(JSON.stringify(person));
  console.dir(person);

  function divide(a, b) {
    debugger; // Execution will pause here
    return a / b;
  }
  
  let result = divide(10, 2); // Execution will pause at the debugger statement
  console.log(result);
  
  