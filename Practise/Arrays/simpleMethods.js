/*Arrays are also objects , because
they use built in methods, only object can use methods
*/
//Slice and splice methods

const arr = [1, 2, 3, 4, 5, 6]

//slice method creates a new array from the array in which it is been used
//it won't change the original array

const arrSlice = arr.slice(2)
console.log(arrSlice) // 3,4,5,6 means it will start from index 2 and print till the last element

console.log(arr.slice(2, 5)) // 3,4,5 means it has printed index 2,3 and 4 value 

console.log(arr.slice(-2)) // 5,6 means the last two elements of the array
console.log(arr.slice(2, -2)) // 3,4 means it will start from index 2 and it will print till before the last two elements
console.log(arr.slice(-2, 2)) // it will return an empty array because it found no range


//Splice method
//Splice method deletes element from the array and returned the deleted elements
//It changes the original array

console.log(arr.splice(-1)) // it will delete the last element and return it as an array
console.log(arr) // 1,2,3,4,5
console.log(arr.splice(1, 3)) // it will delete from index 1 to 3 and return it as an array
console.log(arr)

//Suppose I want to extract particular values from an array
const input = ["Computer", "BBA", "Science", "Engineering", "Software", "Development", "Project", "IT", "Department"]
//suppose i want to extract Software Development and IT Department from this array and create new two arrays

const job = input.splice(4, 2) //means from index 4 , 2 elements will be deleted from the input array and stored in job as an array
console.log(job) //[Software,Development]

const position = input.splice(-2) // the last two elements will be deleted
console.log(position) // [IT,Department]

console.log(input) // the other remaining elements


//when slice take two parameters say 2 and 5 , it will take 5-2=3 index values starting from 2
//but when splice take two parameters , first one is the starting index and second one is the count of how many elments you want to delete from the starting index





//Reverse method
//Reverse method does change the original array

const letters = ['a', 'e', 'i', 'o', 'u']

const revLetters = letters.reverse()
console.log(letters) // u o i e a , changed the original array 
//console.log(revLetters)




//Concat method
//It doesn't change the original array

const fname = ['Mahbub','Hossain']
const lname = ['Faisal']

const fullName = fname.concat(lname)
console.log(fname)
console.log(lname)
console.log(fullName)

//concat can be done by array destructuring also ---> 
console.log([...fname, ...lname])


//Join method
//It also doesn't change the original array
//Join can convert the whole array into string with a particular char or string joining every element of the array

const nm= ["Monwar","Hossain","Babul"]

console.log(nm.join(" "))