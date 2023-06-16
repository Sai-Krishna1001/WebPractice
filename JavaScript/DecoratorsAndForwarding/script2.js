let worker = {
    slow(min, max){
        alert(`Called with ${min},${max}`);
        return min + max;
    }
}

function cachingDecorator(func,hash){
    let cache = new Map();
    return function(x){
        let key = hash(arguments);
        if(cache.has(key)){
            return cache.get(key);
        }
        let result = func.call(this, ...arguments);
        cache.set(key,result);
        return result;
    }
}

// function hash(args){
//     return args[0] +','+args[1];
// }
function hash(args){
    alert([].join.call(arguments));
}
// alert(worker.slow(1));
worker.slow = cachingDecorator(worker.slow,hash);
alert(worker.slow(3,5));
alert("Again" + worker.slow(3,5));

// func.apply(context.args);
// func.call(context, ...args);

// let wrapper = function(){
//     return func.apply(this, arguments);
// }

// function sayHi(phrase){
//     alert(this.name + phrase);
// }
// let user = {name: "John"};
// sayHi.call(user,"Hello");