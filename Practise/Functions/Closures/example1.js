let f;

const g = function () {
    let a = 22
    f = function () {
        console.log(a * 2)
    }
}

g() // to execute the g function else f will not be assigned as a function
f() // this will give us value 44

console.dir(f) // we will have to see it in browser. we will find that closue for this f function is a=22


const h = function () {
    let b = 100
    f = function () {
        console.log(b * 2)
    }
}

h() // this function will reassigned f function to a new function
f() // this will give us 200 value
console.dir(f) // this time we will find that closure for this f function is b=100

// So a closure always make sure that if a function has parent function
// then it does not loose the connection with the variables of the parent function
