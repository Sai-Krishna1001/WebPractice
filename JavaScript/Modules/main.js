import {add, subtract} from './math.js';
import {capitalize} from './utils.js';
import { multiply } from './calculator.js';
import { greet } from './my-module.js';

console.log(add(2,3)); // 5
console.log(subtract(5,2));// 3

console.log(capitalize('hello')); // Hello
console.log(capitalize('krishna')); //Krishna

console.log(multiply(3,4)); // 12

console.log(greet('John'));

// Asynchronous Module Loading (using dynamic import)
document.getElementById('loadButton').addEventListener('click',async()=>{
    const module = await import('./module.js');
    module.doSomething();
})

