// Difference between map and object is 
//Object most often has a property/key which is string
//In map key can be anything strings,objects,variables


const rest = new Map()
rest.set('name', 'Manen Chinese restaurant')
rest.set('location','Chasara,Sayam plaza 2nd floor')
rest.set(1,'platter')
rest.set(2,'Burger')
rest.set('catagories',['Pasta','Pizza','Risotto','Fried Chicken'])
.set('open',11)
.set('close',23)
.set(true,'We are open :D')
.set(false, 'We are closed :')


//you have to give the key name to get the value 
console.log(rest.get('name'))
console.log(rest.get(true))


//example
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

//has property 
console.log(rest.has('catagories'))

// delete property

rest.delete(2)
console.log(rest)

//size property
console.log(rest.size)

//remove property
//rest.clear()

// array as key in map

rest.set([1,2], 'Test')

console.log(rest.get([1,2])) 
//this method won't work like this because both declared arrays will point different path in the memory.we have to declare the array in a variable first

const array = [1,2]
rest.set(array,'testtt')
console.log(rest.get(array)) // this will work because now array is pointing to the same memory 