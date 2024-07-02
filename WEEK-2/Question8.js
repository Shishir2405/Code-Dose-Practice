(function() {
    console.log(aFunc());
    function aFunc() {
      return 'Inside IIFE!';
    }
  })();
  