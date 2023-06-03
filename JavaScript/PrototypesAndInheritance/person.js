// Create a prototype object
var personPrototype = {
    greeting: function() {
      console.log('Hello!');
    }
  };
  
  // Create a new object using the prototype
  var john = Object.create(personPrototype);
  john.name = 'John Doe';
  
  // Access the property and method of the object and its prototype
  console.log(john.name);         // Output: John Doe
  john.greeting();                // Output: Hello!
  
  // Modify the prototype to add new behavior
  personPrototype.farewell = function() {
    console.log('Goodbye!');
  };
  
  // New objects created from the prototype will inherit the added behavior
  var jane = Object.create(personPrototype);
  jane.name = 'Jane Doe';
  
  jane.greeting();                // Output: Hello!
  jane.farewell();                // Output: Goodbye!
  