const airline = 'Bangladesh Biman'
let plane = "Boeing  737-800"

//make string characters in uppercase

console.log(airline.toLocaleLowerCase())

//to uppercase
console.log(airline.toLocaleUpperCase())

// A name is given in wrong case . Make it proper
const passanger_name = 'fAiSaL'
const passanger_name_lowercase = passanger_name.toLocaleLowerCase()
const correct_passanger_name = passanger_name_lowercase[0].toLocaleUpperCase() + passanger_name_lowercase.slice(1)

//Here what slice method doing is : from index 1 to end of the string , it is making a separate string and adding it.
console.log(correct_passanger_name)

//comparing email
//suppose a email is given with many whitespace and unorganised characters
//But if the letters are same then make the email a valid email. and return true

const compare = (input, realEmail) => {
    const checkInput = input.toLocaleLowerCase().trim()
    if (checkInput === realEmail) {
        return true
    }
    else {
        return false
    }
}

const ans = compare('    MahBub hossain @gmail.COM', 'mahbubhossain@gmail.com')

if (ans) {
    console.log('Email is correct')
}
else {
    console.log('Email is correct')
}


//replacing characters of a string with another characters

const priceUS = '12 dollar'
const priceSpain = priceUS.replace('dollar', 'pound')
console.log(priceSpain)

const priceUSA = '$120'
const priceGB = priceUSA.replace('$', '£')
console.log(priceGB)


const announcement = 'All the passangers! please come to the boarding door 23. Boarding door 23!'

console.log(announcement.replace('door', 'gate'))

//replacing all the door words
//console.log(announcement.replaceAll('door', 'gate')) Ths method will come in future
//this can be also done using regular expression

console.log(announcement.replace(/door/g, 'gate'))


//Boolean method (pattern matching)

const newPlane = 'A320r'
console.log(newPlane.includes('A320')) // this will give true
console.log(newPlane.includes('A321')) // this will give false

//another boolean method
console.log(newPlane.startsWith('A3')) //true
console.log(newPlane.startsWith('A2')) // false
console.log(newPlane.endsWith('20r')) //true
console.log(newPlane.endsWith('21r')) //false


/* Create a function which checks what a passanger has bring to the airport
make sure he doesn't have any knife or gun
Remember : Knife can be written as KNIFE,KniFE,KNife,KnIfE etc.
same goes for the gun
*/

const checkBaggage = (items) => {
    const baggage = items.toLocaleLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are not allowed on board')
    } else {
        console.log('Welcome on board')
    }
}

checkBaggage('Passanger has a laptop,some food and a pocket knife')
checkBaggage('Passanger has a laptop,some food and a pocket kniFE')
checkBaggage('Passanger has a laptop,keys and a pocket KNife')
checkBaggage('Passanger has a camera , foods and socks')
checkBaggage('Passanger has a laptop,some food and a guN')


