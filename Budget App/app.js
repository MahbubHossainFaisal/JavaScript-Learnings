//budget controller module under IIFE

var budgetController = (function () {})();

var UIController = (function () {
  // code;
})();

//Global App controller
var controller = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    //1. get the field input data

    //2. add the item in the budget controller

    //3. add the item to the UI controller

    //4. calculate the budget

    //5. display the budget in the UI.
    console.log("It works!");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      //Here we are checking that after entering values to the input field if user presses the ENTER button whose keycode is 13
      //If user presses it ,it will work like the click button
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
