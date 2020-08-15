//Passing functions as arguments

var birthYear = [1990,1988,1996,1992,1998];

function calcAge(cal){
	return 2020 - cal ;
}



function storingAge(birthYear,calcAge) {
	
	var age = [];
	
	for(var i = 0 ; i < birthYear.length; i++){

		age.push(calcAge(birthYear[i])); //here calcAge function is passing as arguments 
	}
	return age;
	
}


function isFullAge(el){
	return el >= 28 ;
}



var result = storingAge(birthYear,calcAge); //this variable will store the array of age after calcAge function calculates it
// and values are pushed in the age array.

console.log(result);

var Full = storingAge(result,isFullAge); //this variable will store the boolean values returned as array
//from the storing age function  as isFullAge function that we are passing returns boolean value.
console.log(Full);

