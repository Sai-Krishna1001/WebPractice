var globalVar = 'I am a global variable';

function example1() {
  console.log(globalVar); // Output: I am a global variable
}

example1();

function example2() {
    var localVar = 'I am a local variable';
    console.log(localVar);
  }
  
example2(); // Output: I am a local variable
// console.log(localVar); // Error: localVar is not defined
  