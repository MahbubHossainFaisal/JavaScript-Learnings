const flight = 'LH111'
const Faisal = {
    name: 'Mahbub Hossain Faisal',
    passport: 23423423242342
}

const checkin = function (flightNum, passanger) {
    flightNum = 'LP222'

    passanger.name = 'Mr.' + passanger.name

    if (passanger.passport === 23423423242342) {
        console.log('Checkin')
    }
    else {
        console.log('Wrong Passport')
    }
}

checkin(flight, Faisal)
console.log(flight)
console.log(Faisal)

/*
Here we can see that ,
we pass flight and Faisal as argument
but in console it is found that only Faisal.name property has changed according to function
but we also changed the value of argument flight which was flightName parameter
but It didn't change the main value of flight

the reason is,
flight is a primitive value and when we are passing it as argument and a function
recieving it as parameter the parameter is a copy of the argument or it can be said that
the parameter is a new variable which stores the value of the argument.
So, the main value didn't change.


but when we pass an object as arguments , we usually pass the reference of the object
and the function parameter and the object both point to the same memory .
So the if the parameter value changes, it effects the object property.
That's why main object changes.
*/