
// Cannot be used as constructors: Arrow functions do not have their own this or prototype binding, which means they cannot be used as constructors to create new objects.

// Traditional function expression as constructor
function Person(name){
    this.name = name;
}
const john = new Person("John");
console.log(john.name);

// Arrow function cannot be used as constructor
const Person2 = (name)=>{
    this.name = name; // Error: "this" is not defined
};
const sai = new Person2("Sai");
console.log(sai.name);