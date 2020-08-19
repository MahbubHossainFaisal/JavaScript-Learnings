//Example 3 of arrow function

//in ES5

//function constructor

function Person(name) {
  this.name = name;
}

var Friends = ["Sakib", "Robin", "Asfique", "Imran"];

Person.prototype.friendsES5 = function (Friends) {
  var arr = Friends.map(
    function (el) {
      return this.name + " is friend with " + el;
    }.bind(this) //we have to use bind method to make that anonymous function use 'this' properties else it cannot.
  );
  console.log(arr);
};

new Person("Faisal").friendsES5(Friends);

//ES6

Person.prototype.friendsES6 = function (Friends) {
  var arr = Friends.map((el) => `${this.name} is friend with ${el}`); //just did it in one line with ease
  console.log(arr);
};

new Person("Anoy").friendsES6(Friends);
