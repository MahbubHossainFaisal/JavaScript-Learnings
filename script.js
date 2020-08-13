//constructor

var Person = function(name,birthYear,job){

	this.name = name;
	this.birthYear = birthYear;
	this.job = job;
}

Person.prototype.calculateAge = function(){

	console.log('Present age is : ' +(2020-this.birthYear));
}

var Faisal = new Person('Faisal',1997,'Student');
var Shanta = new Person('Shanta',1991,'Qc Officer');

console.log(Faisal);
Faisal.calculateAge();

console.log(Shanta);
Shanta.calculateAge();
