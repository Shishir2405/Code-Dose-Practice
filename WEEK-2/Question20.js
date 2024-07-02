function Computer() {
    this.operatingSystem = 'Windows';
  }
  Computer.prototype.boot = function() {
    console.log("Booting...");
  };
  
  function Laptop() {
    Computer.call(this);
    this.hasBattery = true;
  }
  Laptop.prototype = Object.create(Computer.prototype);
  Laptop.prototype.constructor = Laptop;
  
  var myLaptop = new Laptop();
  console.log(myLaptop.hasBattery); // Output: true
  console.log(myLaptop.operatingSystem); // Output: "Windows"
  myLaptop.boot(); // Output: "Booting..."
  