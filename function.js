/*
Closures: An inner function has always access to the variables and
parameters of it's outer function,even after the outer function has returned.

*/

function retirement(retirementAge){
	var statement = ' years reamining for retirement.';

	return function (birthYear) {
		var age = 2020 - birthYear;
		console.log(retirementAge - age + statement);
	}
}


 var US = retirement(66); // second (1980) is for second anonymous function parameter
 US(1980); //this will call the anonymous function

 console.log(US); // this will show the whole anonymous function . Means the US variable has stored the who anonymous function.

 //Another example of closures

 function question(job){

 	return function(name){
 		if(job === 'Developer'){
 			console.log('Hi ' + name + ' , You are a Developer');
 		} else if(job === 'Designer'){
 			console.log('Hi ' + name + ' , You are a Designer');
 		} else {

 			console.log('Hi ' + name + ' , Who are you?');
 		}
 		}
 	} 
 	/*job parameter is declared earlier and even the question function already returned something
 	though we used the job value later in the anonymous function.this is an example of closure */
 
 var Faisal = question('Designer');
 Faisal('Faisal');

 var Asif = question('Developer')('Asif');

 var Raihan = question()('Raihan');
