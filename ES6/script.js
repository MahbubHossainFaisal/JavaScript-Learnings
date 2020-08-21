//Class in ES6

//In ES5 we do it like this.

var ES5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

ES5.prototype.calculateAge = function () {
  return 2020 - this.yearOfBirth;
};

var Faisal = new ES5("Faisal", 1997, "Developer");

console.log(Faisal.calculateAge());

//In ES6 we will use class

class ES6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calculateAge() {
    return 2020 - this.yearOfBirth;
  }

  static greetings() {
    //we cannot use this method in the instances because they can't inherit it.
    console.log("Hi there!");
  }
}

var shanta = new ES6("Shanta", 1991, "QC Officer");
console.log(shanta.calculateAge());

ES6.greetings(); // we have to call those static functions like this using the class name.
