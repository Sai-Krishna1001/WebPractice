// Function composition - Creating a new function by composing multiple functions,
//  where the output of one function becomes the input of the next.
//  For example: const compose = (f, g) => x => f(g(x));

const add = (x,y) => x+y;
const square = x => x*x;

// compose function
const compose = (f,g) => (...args) => f(g(...args));
const addThenSquare = compose(square, add);

const result = addThenSquare(1,2);

console.log(result);