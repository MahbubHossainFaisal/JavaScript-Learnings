//Loops

//in ES6 we cannot use break or continue statements in forEach loop and also in map

var boxes = document.querySelectorAll(".box");

var ES5Boxes = Array.prototype.slice.call(boxes);

for (var i = 0; i < ES5Boxes.length; i++) {
  if (ES5Boxes[i].className === "box blue") {
    continue;
  }
  ES5Boxes[i].textContent = "YOU FOOL!";
}

//In ES6 we have For off loop which works like forEach loop but can use continue and break
var Boxes = document.querySelectorAll(".box");
var ES6Boxes = Array.from(Boxes); //Array.from is an ES6 method.

for (const el of ES6Boxes) {
  if (el.className.includes("blue")) {
    //.includes is a new ES6 string method.
    continue;
  }
  el.textContent = "YOU FOOL TOO!";
}
