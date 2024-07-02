function Animal(name) {
    this.name = name;
  }
  Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise.');
  };
  
  function Dog(name) {
    Animal.call(this, name);
  }
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.speak = function() {
    console.log(this.name + ' barks.');
  };
  
  var dog = new Dog('Rex');
  dog.speak(); // Output: "Rex barks."
  