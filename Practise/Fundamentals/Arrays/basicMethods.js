// Array methods

const arr = ['Faisal',23,'February',2021]

console.log(arr)
//add element in last
arr.push('Goal')
console.log(arr)

//add element in first
arr.unshift('Bangladeshi')
console.log(arr)

//remove element from last
arr.pop()
console.log(arr)
// pop also can return the element it's removing
const popped = arr.pop()
console.log(popped)
console.log(arr)

//remove element from first
arr.shift()
console.log(arr)

//It can also return the element it's removing from first
const poppedFromFirst = arr.shift();
console.log(poppedFromFirst)
console.log(arr)

//Finding index of an element in the array
const index = arr.indexOf('February')
console.log(index)

//return true or false depends on the value if it is in the array or not
let include = arr.includes(23)
console.log(include)

include = arr.includes(100)
console.log(include)




