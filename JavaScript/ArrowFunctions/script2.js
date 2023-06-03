
// Traditional function expression
class Person {
    constructor() {
        this.age = 0;
        setInterval(function () {
            // "this" refers to the global object
            this.age++;
            console.log(this.age);
        }, 1000);
    }
};
const person = new Person();

// Arrow function with lexical "this" binding
class Person2 {
    constructor() {
        this.age = 0;
        setInterval(() => {
            // "this" refers to the Person2 object
            this.age++;
            console.log(this.age);
        }, 1000);
    }
};
const person2 = new Person2();
