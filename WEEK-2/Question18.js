function Shape() {
    this.x = 0;
    this.y = 0;
  }
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
  };
  
  function Rectangle() {
    Shape.call(this);
  }
  Rectangle.prototype = Object.create(Shape.prototype);
  Rectangle.prototype.constructor = Rectangle;
  
  var rect = new Rectangle();
  console.log('Is rect an instance of Shape?', rect instanceof Shape); // Output: true
  rect.move(1, 1); // Output: "Shape moved."
  