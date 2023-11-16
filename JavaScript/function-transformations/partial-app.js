// Partial application - Creating a new function by fixing some number of 
// arguments to a function. The remaining arguments stay unapplied.

// 1. presetting parameters

const add = (x,y) => x+y; // normal function

const add10 = add.bind(null, 10); // partially applied
// sets firstparameter to 10
console.log(add10(20));