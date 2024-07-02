(function() {
    var innerResult = (function() {
      return 5;
    })();
    console.log(innerResult * 2);
  })();
  