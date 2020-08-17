//budget controller module under IIFE

var budgetController = (function () {})();

var UIController = (function () {
  // code here
  var DomStrings = {
      inputType: '.add__type',
      inputDescription: '.add__description',
      inputValue: '.add__value',
      inputBtn: '.add__btn'
  };
  return {

    getInput: function(){
        return{
            type: document.querySelector(DomStrings.inputType).value,
            description: document.querySelector(DomStrings.inputDescription).value,
            value: document.querySelector(DomStrings.inputValue).value
        };
    },

    getDOMStrings: function(){
        return DomStrings;
    }

  };

})();

//Global App controller
var controller = (function (budgetCtrl, UICtrl) {
    var DOM = UICtrl.getDOMStrings();
  var ctrlAddItem = function () {
    //1. get the field input data
    
        var input = UICtrl.getInput();
        console.log(input);
        
    //2. add the item in the budget controller

    //3. add the item to the UI controller

    //4. calculate the budget

    //5. display the budget in the UI.
    console.log("It works!");
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      //Here we are checking that after entering values to the input field if user presses the ENTER button whose keycode is 13
      //If user presses it ,it will work like the click button
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
