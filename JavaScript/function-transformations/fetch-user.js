const fetchUser = id => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve({id, name: 'John'});
        }, 500);
    });
}

// Memoization function
const memoize = fn => {
    const cache = new Map();
    
    return id =>{
        if(cache.has(id)){
            return cache.get(id);
        }
        const result = fn(id);
        cache.set(id, result);
        return result;
    }
}

// Memoized function

const getUser = memoize(fetchUser);

// usage
getUser(9890).then(user =>{
    console.log(user);  //  Makes API call
});

getUser(9890).then(user => {
    console.log(user);  //  returns cached result
});

