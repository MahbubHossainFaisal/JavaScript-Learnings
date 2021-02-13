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

//Arrow function

//Single line arrow function : if the function has one statement to return only 

const calcAge3 = birthYear => 2021-birthYear;

const age3 = calcAge3(1971);

console.log(age3);

//Multiline arrow function: if the functon has more than one statements under it

const calcRetirement = (birthYear,name) => {
    age = 2021-birthYear;
    const retireAge = 65-age;
    return `${name} will retire after ${retireAge} years`;
}

const Faisal = calcRetirement(1996,'Faisal');
const Asif = calcRetirement(1992,'Asif');
console.log(Faisal);
console.log(Asif);


//Function calling another function 

const cutIntoPieces = (numOfFruits) => {
    return 4*numOfFruits
}

const juiceMachine = (apple,orange) =>{

    const applePiece = cutIntoPieces(apple)
    const orangePiece = cutIntoPieces(orange)

    const juice = `The juice will be created with ${applePiece} pieces of apples and ${orangePiece} pieces of oranges`
    return juice
}

const getJuice = juiceMachine(4,5)
console.log(getJuice)


// Coding Challange

const calcAverage = (score1,score2,score3) => {
    return (score1+score2+score3)/3
}



const checkWinner = (dolphinScore,koalaScore) => {

    

    let result = ''
    if(dolphinScore > koalaScore){
        result = `Dolphins win (${dolphinScore} vs ${koalaScore})`
    } else if(dolphinScore === koalaScore){
        result = `Match has been drawn by both the team`
    } else {
        result = `Koalas win (${koalaScore} vs ${dolphinScore})`
    }
    return result
}
const dolphinScore = parseInt(calcAverage(20,30,40))
const koalaScore = parseInt(calcAverage(10,40,20))

const winner = checkWinner(dolphinScore,koalaScore)

console.log(winner)