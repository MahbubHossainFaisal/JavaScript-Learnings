//Classes with subclasses or inheritence in ES6
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
}

class Person extends ES6 {
  //inhereting the ES6 class by the extends keyword.
  constructor(name, yearOfBirth, job, height, weight) {
    super(name, yearOfBirth, job); //calling the parent class parameterised constructor
    this.height = height;
    this.weight = weight;
  }

  show() {
    console.log(
      `Name: ${this.name},height is : ${this.height} feet,weight is ${this.weight} kg.`
    );
  }
}

var shanta = new ES6("Shanta", 1991, "QC Officer");
console.log(shanta.calculateAge());

var Faisal = new Person("Faisal", "1996", "Developer", 5.5, 62);
console.log(Faisal.show());
