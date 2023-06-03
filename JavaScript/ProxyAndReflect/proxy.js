// A proxy is an object that wraps another object and intercepts 
// fundamental operations on it. By defining custom behavior for
//  these operations, you can modify the default behavior of the 
// target object. Proxies are created using the Proxy constructor.

const target = {
    name : 'krishna',
    age: 22
};

const handler = {
    get: function(target, property){
        console.log(`Accessed property: ${property}`);
        return target[property];
    }
}

const proxy = new Proxy(target, handler);

console.log(proxy.name); // Accessed property: name
// Output: John

console.log(proxy.age); // Accessed property: age
// Output: 30