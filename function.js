//functions returning functions


function question(job){

	if(job === 'Developer'){
		//returning anonymous function
		return function(name){
			console.log('Hi ' + name + ', What type of developer you are?');
		}
	}

	else if(job === 'Designer'){
		//returning anonymous function
		return function (name) {
			
			console.log('Hi ' + name + ', What type of designer you are? UI/UX?');
		}
	}

	else if( job === 'Student'){
		//returning anonymous function
		return function( name ){
			console.log('Hi ' + name + ', What you study?');
		}
	}
}



var ask = question('Developer');

ask('Faisal');

var ask = question('Designer');

ask('Ashik');

var ask = question('Student');

ask('Saina');

