class Person {
   
    constructor() {
      this.age = 0;
      this.intervalId = null;
  
      this.startTimer();
    }
  
    startTimer() {
      this.intervalId = setInterval(() => {
        this.age++;
        console.log(this.age);
      }, 1000);
    }
  
    stopTimer() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    }
  }
  
  const person = new Person();
  
  // Stop the timer after 5 seconds
  setTimeout(() => {
    person.stopTimer();
  }, 5000);
  