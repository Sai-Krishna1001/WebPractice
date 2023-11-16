// Currying - Transforming a function that takes multiple arguments
//  into a function that takes them one at a time. 
// For example: const curried = f => x => y => f(x,y);

// normal function
const sum = (a,b,c) => a+b+c;

// 1. curried function with multiple arguments
const curriedSum = a => b => c => a+b+c;
const add5 = curriedSum(5);

const add3 = add5(3);

const result = add3(4);

console.log(result); // 12

// 2. bind allows partial application by setting the first argument
const multiply = (a,b) => a*b;

const fiveTimes = multiply.bind(null, 5);
const double = multiply.bind(null, 2);

console.log(double(3)) // 6
console.log(fiveTimes(3)) // 15

// 3. Currying Math Utility

const curriedMath = a => ({
    add: b => a+b,
    multiply: b => a*b,
    subtract: b => a-b
});

const sum5 = curriedMath(5);
console.log(sum5.add(3));  // 8
console.log(sum5.multiply(4)); // 20

// 4. Currying with Map

const map  = (fn, arr) => {
    return arr.map(ele => fn(ele));
}

const curriedMap = fn => arr => map(fn, arr);

const doubled = curriedMap(x => x*2)([1,2,3]);

doubled.forEach(element => {
    console.log(element);
});

// 5. Curried Reduce

const reduce = (fn, init, arr) => {
    let acc = init;
    for(let i=0; i<arr.length; i++){
        acc = fn(acc, arr[i]);
    }
    return acc;
}
const curriedReduce = fn => init => arr => 
    reduce(fn, init, arr);

const add = curriedReduce(
    (acc, x)=> acc + x
)(0);
const nums = [10,20,30];

console.log(add(nums));

// 6. composing curried functions
const compose = (f,g) => x => f(g(x));

const add1 = x => x+1;
const multiply2 = x => x*2;

compose(multiply2, add1)(5); 

    // with currying
const cAdd1 = x => add1(x);
const cDouble = x => double(x);

console.log(compose(cDouble, cAdd1)(5)); // 12






