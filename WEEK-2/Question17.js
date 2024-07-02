function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.displayInfo = function() {
    console.log(`Car: ${this.make} ${this.model}`);
  };
  
  var myCar = new Car("Toyota", "Camry");
  myCar.displayInfo(); // Output: "Car: Toyota Camry"
  