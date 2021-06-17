'use strict'
/* bind method works like call method,
but works in a different way. When we use bind method it doesn't 
immedietly call the function , rather it creates a new function binding with 'this' that stores in the declared variable.
Then we can use the variable to call the function later.
*/


const BangladeshBiman = {
    airline: 'BangladeshBiman',
    code: 'BB',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} has booked a seat on ${this.airline} flight ${this.code}${flightNum}`)
        this.bookings.push({ flight: `${this.code}${flightNum}`, name })
    }

}

BangladeshBiman.book(111, 'Faisal')
BangladeshBiman.book(222, 'Farjana')

//another airline object
const EuroCorp = {
    airline: 'EuroCorp',
    code: 'EC',
    bookings: [],
}

const bookFlight = BangladeshBiman.book; //bookFlight is now contain the function of Bangladesh biman object

//use of bind method
const bookEC = bookFlight.bind(EuroCorp)
bookEC(411, 'Senha') // we can now use bookEC directly as a function

//We can declare predefined values while adding bind method with a variable
const bookEC22 = bookFlight.bind(EuroCorp, 22)
bookEC22('Ariful islam')

const bookEC555 = bookFlight.bind(EuroCorp, 555, 'Redwan Anoy')
bookEC555()

console.log(EuroCorp.bookings) // we can see that here the informations also stored in the bookings array under EuroCorp


//bind with addEventListener

//adding new property
BangladeshBiman.planes = 300
BangladeshBiman.buyPlane = function () {
    console.log(this)

    this.planes++;
    console.log(this.planes)
}
// document.querySelector('.buy')
//     .addEventListener('click', BangladeshBiman
//         .buyPlane.bind(BangladeshBiman)) //without bind method the event listener won't work
//we didn't use call method here because call method directly call the method
//but we want to call the function after the button clicked, that's why we used bind method.


// bind method for partial application

//we can predefine parameters for functions earlier through bind method
const addTax = (rate, value) => value + rate * value

//now suppose we want to fix the rate parameter earlier . we can do this by bind method

const addVat = addTax.bind(null, .24) // here we have used null instead of addTex because addTax has no use of this

console.log(addVat(200)) // we are sending just the value argument
console.log(addVat(100))

 // note that when we use bind method to any function that becomes  a new function
 //so addTax and addValue both contains different functions but addTax is working same as addTax because we have bind it

