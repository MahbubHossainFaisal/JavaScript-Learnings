//Spread Operator of ES6
//Example 1:
//in ES5
var ages = [12, 14, 11, 16];
function sum(a, b, c, d) {
  return a + b + c + d;
}

//if we want to pass array elements to that function we have to use apply method in ES5

var result = sum.apply(null, ages);
console.log(result);

//In ES6 we have spread operator  (...) to do that easily.

var Ages = [12, 14, 11, 16];
function Sum(a, b, c, d) {
  return a + b + c + d;
}

var Result = Sum(...Ages);
console.log(Result);

//Example 2:

//If we want to merge to arrays we can do that simply with spread operator

var firstname = ["Mahbub", "Monwar", "Fatema"];
var lastname = ["Hosna", "Shanta", "Chayna"];

var FullName = [...firstname, ...lastname];
console.log(FullName);
//if we want to add more elements inside we can do that too.
var Full = [...firstname, "Amena", ...lastname];
console.log(Full);

//Example 3:

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes]; //mergin all query selectors with spread operator.

Array.from(all).forEach((el) => (el.style.color = "navy blue")); //converting them in array and changing the color of text;
