// Continuing from the previous example with Dog and Animal

Animal.prototype.sleep = function() {
    console.log(this.name + ' sleeps.');
  };
  
  Dog.prototype.sleep = function() {
    console.log(this.name + ' sleeps like a dog.');
  };
  
  var dog = new Dog('Rex');
  dog.speak(); // Output: "Rex barks."
  dog.sleep(); // Output: "Rex sleeps like a dog."
  