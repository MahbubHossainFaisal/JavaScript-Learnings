//Arrays in ES6


//in ES5

const Boxes = document.querySelectorAll('.box'); //this will return a node

var ES5Boxes = Array.prototype.slice.call(Boxes);//making it array

ES5Boxes.forEach(function(el){
    el.style.backgroundColor = 'dodgerblue';
});

//In ES6

const boxes = document.querySelectorAll('.box');

var ES6Boxes = Array.from(boxes);

ES6Boxes.forEach((el)=> el.style.backgroundColor = 'orangered');




