//Destructuring 

//In ES5

var arr = ['Faisal',22];
var name = arr[0];
var age = arr[1];
console.log(name);
console.log(age);

//In ES6

const [Name,Age] = ['Faisal', 22]; //Destructuring method
console.log(Name);
console.log(Age);


//In ES5

var obj = {
    firstname: 'Mahbub',
    lastname: 'Hossain'
};

console.log(obj.firstname);
console.log(obj.lastname);

//In ES6
var Obj = {
    firstname: 'Mahbub',
    lastname: 'Hossain'
};
const {firstname,lastname} = Obj; //Use of destructuring
console.log(firstname);
console.log(lastname);

//We can also change the variable name while making a copy of the Obj object like below
const { firstname:a, lastname:b } = Obj; //Use of destructuring
console.log(a);
console.log(b);

//Another example using a function

function calulate(year){
    var age=new Date().getFullYear()-year;

    return [age,65-age]; //suppose 65 is the retirement age.

}

const [personAge,Retirement]=calulate(1998);//use of destructuring
console.log(personAge);
console.log(Retirement);