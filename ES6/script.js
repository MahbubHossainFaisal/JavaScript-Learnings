//Arrow functions

//ES5 functions

const ages = [1996, 1998, 1991, 1999, 1990];

var agesES5 = ages.map(function (el) {
  return 2020 - el;
});

console.log(agesES5);

// ES6 arrow function feature

var agesES6 = ages.map((el) => 2020 - el); //we did the same thing just in one line
console.log(agesES6);

//another example using two parameters.

var agesES6 = ages.map((el, index) => `Element number ${index + 1}: ${el}`);
console.log(agesES6);

//another example where there are multi lines in the arrow function.In that time we have to use the return keyword.

var agesES6 = ages.map((el, index) => {
  var success = 30;

  return `Number ${index + 1} Will be successfull after ${
    success - (2020 - el)
  } years`;
});

console.log(agesES6);
