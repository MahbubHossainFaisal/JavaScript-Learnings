(function () {

	// This is a small project about random question.
console.log('Welcome !');
function Question(question,answers,correct){

	this.question=question;
	this.answers=answers;
	this.correct=correct;
}

Question.prototype.displayQuestion = function(){

	console.log(this.question);

	for(var i = 0 ; i < this.answers.length ; i++){
		console.log(i + ' :' +this.answers[i]);
	}
}

Question.prototype.checkAnswer = function(userAnswer){

	if(this.correct === userAnswer){

		console.log('Correct Answer! ');
	} else {

		console.log('Wrong Answer! Try Again');
	}

}

var q1 = new Question('What\'s my name? ', ['Asif','Raihan','Faisal','Sajedul'],2);

var q2 = new Question('What\'s my age?',[18,23,20,15],1);

var q3 = new Question('What type of developer I want to become?',['Frontend','Backend','FullStack'],2);

var q4 = new Question('Am I emotional?',['Yes','No'],0);

var q5 = new Question('I never got cheated',['True','False'],1);


var questions = [q1,q2,q3,q4,q5];

var randomQuestion = Math.floor(Math.random()*questions.length);

questions[randomQuestion].displayQuestion();

var userAnswer = parseInt(prompt('Enter the number related to answer!'));
// we use parseint because the prompt input given by the  user will be stored as string.But we want it as number
//Because we passed 'correct' variable as number in the constructor.
//to convert it into number we used parseInt method.

questions[randomQuestion].checkAnswer(userAnswer);


})();


/*The IIFE is used so that the variables or functions we have used under this scope of IIFE
will be protected under this function only.
 Out side this scope no one can use the variables ,function's values that are inside the scope . 
 More over same variables can be declared outside and they can be used easily as they won't effect 
 the variables which are used under the IIFE scope.
 So a privacy is being maintained by the use of IIFE */