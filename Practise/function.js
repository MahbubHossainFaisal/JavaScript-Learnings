//Call,Bind and Apply

var Faisal = {

	name : 'Faisal',
	age : 23,
	job : 'Developer',
	presentation: function(type,timeOfDay){

		if(type === 'Formal'){

			console.log('Hello! ' + timeOfDay + 'I am '+ this.name + 
				'. I work as a ' + this.job + ' and I am '+ this.age +' years old.');
		} else if(type === 'Friendly'){

			console.log('Hi there! ' + timeOfDay + 'I am '+ this.name + 
				'. I work as a ' + this.job + ' and I am '+ this.age +' years old.');
		}
	}
};

Faisal.presentation('Formal','Good Morning.');

var Tafsir = {

	name : 'Tafsir',
	age : 24,
	job : 'H&R Manager'
};

//Call method

Faisal.presentation.call(Tafsir,'Friendly','Good evening.');

//using call method Tafsir object is calling or borrowing the property of Faisal object and using it with it's own properties.

//Bind method: It's similar to call function but doesn't call a function directly rather generates a copy of that function

var TafsirFormal = Faisal.presentation.bind(Tafsir,'Formal');//In bind method we can predefine methods earlier

TafsirFormal('Good Noon.'); //Here we r calling just the anonymous function under the presentation property which in call method can not be done. 
TafsirFormal('Good Morning');
