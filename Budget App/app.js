//budget controller module under IIFE

var budgetController = (function () {
  var x = 23; // to access this variable from outside we later return this as function.Else this variable can't be accessed from outside
  var add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      return add(b);
    },
  };
})();

//ui controller module for under IIFE
var UIController = (function () {
  // code;
})();

//now here will be another controller which will access the other two controllers as parameters so that the properties can be accessed

var controller = (function (budgetCtrl, UICtrl) {
  var z = budgetCtrl.publicTest(12); // to access this variable from outside we later return this as function.Else this variable can't be accessed from outside
  return {
    anotherTest: function () {
      console.log(z);
    },
  };
})(budgetController, UIController);
