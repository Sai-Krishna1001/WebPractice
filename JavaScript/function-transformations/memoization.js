// Memoization - Caching the results of function calls to avoid
// unnecessary repeated computation. Useful for recursive functions.

const memoize = fn => {
    const cache = new Map();

    return value => {
        if(cache.has(value)) return cache.get(value);

        const result = fn(value);
        cache.set(value, result);
        return result;
    }
}

const factorial = n => {
    if(n==0 || n==1) return 1;
    else return n*(factorial(n-1));
}

const memoizedFactorial = memoize(factorial(10));

console.log(memoizedFactorial);