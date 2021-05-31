const ordersSet = new Set(
    ['Pasta', 'Pizza', 'Burger', 'Pizza', 'Pasta', 'Risotto', 'Chicken Fry', 'Burger']
)

//Set will print the unique values and remove the duplicates from the array
console.log(ordersSet)

//Set size
console.log(ordersSet.size)

//Strings are also iterables , a set can iterates each character of a string as string is a array of characters
console.log(new Set('Iterables'))

//We can check for certain element in the set
console.log(ordersSet.has('Pizza')) // true
console.log(ordersSet.has('Bread')) // false


//new elements can be added
ordersSet.add('Garlic bread')
ordersSet.add('Garlic bread') //This won't be taken by the Set
console.log(ordersSet)

//elements can be deleted 
ordersSet.delete('Risotto')
console.log(ordersSet)


//We can't get index values in Sets because in Sets there is no index
console.log(ordersSet[2]) //undefined


//set can be cleared
//ordersSet.clear()


//Looping over Set

for(const order of ordersSet) console.log(order)

//We basically use set for having only unique values in it . For example

const staff = ['Chef','Waiter','Manager','Chef','Waiter']
const positions = new Set(staff);
console.log(positions)
// positions is  a set . If we want to convert it into array we have to do this

const uniqueStaff = [...positions] // because set is also an iterable , and destructuring can be done on iterables
console.log(uniqueStaff)

//Count number of unique elements in array
const arr = ['a','b','c','a','b','d','c','e']

const ans = new Set(arr)
console.log(ans.size) // this will say that array has 5 unique elements


//count unique alphabets in a string

console.log(new Set('JohannesBurg').size)

