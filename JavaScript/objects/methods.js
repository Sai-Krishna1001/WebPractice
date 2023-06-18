const obj = {a:1, b:2, c:3};
const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);
console.log(keys);
console.log(values);
console.log(entries);

// Object.assign(target, ...sources) - Copies the values of all enumerable properties from one or more source objects to a target object.
const target = {a:1};
const source = {b:2, c:3};
const merged = Object.assign(target, source);
console.log(merged);

// Object.hasOwnProperty(prop) - Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
console.log(obj.hasOwnProperty('a')); // Output: true
console.log(obj.hasOwnProperty('d')); // Output: false

// Object.freeze(obj) - Freezes an object, making it read-only and preventing any modifications to its properties.
const xyz = {x:10, y:20, z:30};
Object.freeze(xyz);
xyz.x = 100; // Attempted modification
console.log(xyz); // o/p: {x:10, y:20, z:30}

// Object.seal(obj) - Seals an object, preventing the addition or deletion of properties while still allowing modifications to existing properties.
const pqr = {p:5, q:15};
Object.seal(pqr);
pqr.r = 3; // Attempted addition
delete pqr.p // Attempted deletion
obj.q = 4; // Property modification
console.log(pqr);


// Object.is(obj1, obj2) - Determines whether two values are the same value (strict equality) or not.
console.log(Object.is(1, 1)); // Output: true
console.log(Object.is({}, {})); // Output: false
console.log(Object.is(NaN, NaN)); //Output: true
