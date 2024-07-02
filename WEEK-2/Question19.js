function Gadget() {
    this.name = 'Gadget';
  }
  Gadget.prototype.getName = function() {
    return this.name;
  };
  
  function Phone() {
    this.name = 'Phone';
  }
  Phone.prototype = Object.create(Gadget.prototype);
  Phone.prototype.constructor = Phone;
  
  var myPhone = new Phone();
  console.log(myPhone.getName()); // Output: "Phone"
  