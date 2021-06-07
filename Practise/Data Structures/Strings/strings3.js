//split and join method
//split function gives us an array

const Name = 'Mahbub Hossain Faisal'
const Father = 'Monwar+Hossain+Babul'

console.log(Name.split(' '))
console.log(Father.split('+'))

//As this split function converts strings into array we can destructure them
const [firstName,middleName,lastName] = Name.split(' ')
console.log(firstName,middleName,lastName)

//join method: we can join different strings under an array together with join method
const str = ['Mr.',firstName,middleName].join(' ') //this array will convert into a single variable
console.log(str)


//Example ---> Capitalize a full name , say input --> mahbub hossain faisa , make it ----> Mahbub Hossain Faisal

const capitalizeName = (input) =>{
    const nameArray = input.split(' ')
    const capitalize = []
    for(const n of nameArray){

       // let element = n[0].toUpperCase() + n.slice(1)
       //we can also do this
       let element = n.replace(n[0],n[0].toUpperCase())
        capitalize.push(element)

    }

    console.log(capitalize.join(' '))
}

capitalizeName('mahbub hossain faisal')

//String padding method

//Suppose I need a 25 characters long string with a name Faisal and the other spaces will be covered with any sign

const padStringInStart = 'Faisal'.padStart(25,'&') //this will cover the starting places with & and at last print Faisal
const padStringInEnd = 'Faisal'.padEnd(25,'&') //this will cover the ending places with & and at first print Faisal
const padStringOverall = 'Faisal'.padStart(16,'*').padEnd(30,'*') //there will be * in both the sides of Faisal
console.log(padStringInStart,padStringInEnd,padStringOverall)

//Example of padding

//Masking a credit card number E.x--> ***********3211 , this is called masking.

const maskCreditCard = (Number) =>{
    const strNumber = Number+''
  //  console.log(strNumber)
    const endNumbers = strNumber.slice(-4) // it will take the last 4 indexes of string strNumber
   // console.log('endNumbers->',endNumbers)
    const mask = endNumbers.padStart(strNumber.length,'*')

    return mask
}


const ans =maskCreditCard(1253466743455112)
console.log(ans)



//Repeat method : it's like a loop, prints the same string again and again for a given number
const confess = 'I will make Shanta regret one day! \n'
console.log(confess.repeat(10))

