//Immediately Invoked Function expression (IIFE)


//without passing parameters
(function (){

	var score = Math.random()*10;
	console.log(score >= 5);
} ) (); //IIFE means we don't have to call this function . It will call automatically itself .



//with parameters passing

(function (el){

	var score = Math.random()*10;
	console.log(score >= 5);
	console.log(el);
})('good luck!');   //IIFE means we don't have to call this function . It will call automatically itself .


//IIFE is also used for data privacy.