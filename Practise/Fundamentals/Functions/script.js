//Function declaration 

function ageCalc(birthYear){
    return 2021-birthYear;
}

const age1 = ageCalc(1986);
console.log(age1);

//Here this is is an autonomous Function using as an expression.Expression is something which returns a value.

const ageCalc2 = function(birthYear){
    return 2021-birthYear;
}

const age2 = ageCalc2(1976);
console.log(age2);


/*
Difference between function declaration and function expression

we can call e function before it's declaration but we can't call e function expression before declaration . 

*/