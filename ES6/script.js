//Two new array methos findIndex and find

//in ES5
var ages = [16, 14, 15, 21, 10];

var fullAge = ages.map(function (el) {
  return el >= 18;
});

console.log(fullAge.indexOf(true)); //to find the index whose value returns true;
console.log(ages[fullAge.indexOf(true)]); //value that stored in the index;

//in ES6 there are findIndex and find methods for it.
var fullAgeIndex = ages.findIndex((el) => el >= 18);
console.log(fullAgeIndex);
var fullAge = ages.find((el) => el >= 18);
console.log(fullAge);
