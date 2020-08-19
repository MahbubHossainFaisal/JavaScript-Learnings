//Strings

//in ES5

let firstname = "Mahbub";
let lastname = "Hossain";
const yearOfBirth = 1998;

function calculateAge(year) {
  return 2020 - year;
}

console.log(
  "Hi,I am " +
    firstname +
    " " +
    lastname +
    ".I am " +
    calculateAge(yearOfBirth) +
    " years old."
);

//ES6 makes it easier by using backticks ``;

console.log(
  `Hi,I am ${firstname} ${lastname}.I am ${calculateAge(
    yearOfBirth
  )} years old.`
);

// some new string methods in ES6
//boolean method : startsWith(),ednsWith(),includes(),repeat()
const name = `${firstname} ${lastname}`;
console.log(name.startsWith("f")); //will give a false result.
console.log(name.endsWith("ain")); //will return true;
console.log(name.includes("bub")); //will return true; this is used to search a middle substring
console.log(`${firstname} `.repeat(10)); //this will repeat the firstname for 10 times. we use the backticks method to give a space after every word.
