const airline = 'Bangladesh Biman'
let plane = "Boeing  737-800"
//length of a string
console.log(plane.length) // along with white space

console.log(airline.indexOf('a')) //first occurrence of a 
console.log(airline.lastIndexOf('a')) // last occurrence of a 

// slice method , cut a string into pieces
console.log(airline.slice(0, 10)) // Bangladesh


//Suppose I want to cut the strings where there is space
console.log(airline.slice(0, airline.indexOf(' '))) //Bagladesh
console.log(airline.slice(airline.lastIndexOf(' ') + 1)) //Biman

//Negative parameter for slice method
console.log(airline.slice(-3)) // means last 3 characters of airline string
console.log(airline.slice(0, -3)) // this means it will start from 0 and end before three characters left


//use of slice method to check a seat is a middle seat or not in a plane

const checkSeat = (seat) => {

    //if last character of a string is B or C ,then it is the middle seat
    if (seat.slice(-1) === 'B' || seat.slice(-1) === 'C') {
        //This condition will check the last character of the string with B or C
        console.log('Yes! This is a middle seat')
    }
    else {
        console.log('No!This is not a middle seat')
    }


}
checkSeat('11B')
checkSeat('11A')
checkSeat('11C')

