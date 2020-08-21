//Map in ES6

var question = new Map();
//set operation.
question.set(
  "question",
  "What is the official name of major JavaScript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer :D");
question.set(false, "Wrong answer!Try again.");
//get operation
console.log(question.get("question"));
console.log(question.get(3));
console.log(question.get(false));
if (question.has(false)); //has operation.
console.log(question.get(4));

//delete operator
question.delete(4);
console.log(question);

//clear operator to delete all.
//question.clear();

//We can use for off loop to iterate through the map;

for (let [key, value] of question.entries()) {
  if (typeof key == "number") {
    console.log(`Answer ${key} : ${value}`);
  }
}

//another example

var ans = parseInt(prompt("Write the correct answer:"));
console.log(question.get(ans === question.get("correct"))); //ans===question.get("correct") will return true
