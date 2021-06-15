/* Higher order functions:
Higher order functions are those functions which recieves another function as paramter
or which return another functon
For example, addEvenetListener is a higher order function because it recieve function as parameter

First class functions are just values . They can be stored in variables or can also be stored
in object property.They are just a feature .
*/

//Example

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ') //here others is forming an array with the values after the first space

    return [first.toUpperCase(), ...others].join(" ") // here others array is destructuring the values.
}

//Higher order function

const transformer = function (str, fn) {
    console.log(`Original string: ${str}`)
    const fnValue = fn(str)
    console.log(`Converted string: ${fnValue}`)

    //Higher order functions also have methods
    //exmaple
    console.log(`Transformed by: ${fn.name} function`) // this will give us the function name
}

transformer('JavaScript iS the Best', oneWord)
transformer('faisal is my name', upperFirstWord)

//Foreach is a higher order function
//example

const print = function () {
    console.log('Hi')
}

const arr = ['Asif', 'Raihan', 'Sagor']

arr.forEach(print) // passing the callback function inside of foreach method.As foreach passing a function, so it is a hof too

//Higher order functions create abstractions


