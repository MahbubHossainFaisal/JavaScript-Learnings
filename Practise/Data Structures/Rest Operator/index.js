/*Spread operator is used to unpack elements of an array or object 
Rest operator is used to pack elements of arrays
We use spread operator in the right hand side of the assignment operator most often
Rest operator mostly used in left hand side
*/

const arr = [1, 2, 3, 4, 5]
const [a, b, ...others] = arr // 1 will store in a , 2 will in b , 3,4,5 will be stored in others as an array
console.log(a, b, others)



const restaurant = {
    name: 'classico italiano',
    location: 'Dhaka 1203, Bashundhara R/A,Block C',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Burger', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    DeliveryOrder: function ({ time, address, starterCourse, mainCourse, pay = 100 }) {
        console.log(`Order recieved! You have ordered ${this.starterMenu[starterCourse]} as your starter and ${this.mainMenu[mainCourse]} as your main course.\n
        Your order will be arrived in '${address}' in this address. \n
        It will be arrived at ${time} \n
        you have to pay ${pay} taka as delivery charge`)
    },
    OrderPasta: function (ingredient1, ingredient2, ingredient3) {
        console.log(`You have selected ${ingredient1} ${ingredient2} and ${ingredient3} for making pasta!`)
    },
    OrderPizza: function (mainIngredient,...otherIngredients) {
        console.log('Main ingredient: ',mainIngredient)
        console.log('Other ingredients: ',otherIngredients)
    }

}


// using destructuring, rest and spread operator all together

const [firstStarterItem, , thirdStarterItem, ...otherItems] = [
    ...restaurant.starterMenu,
    ...restaurant.mainMenu
] 
//no variable can be added after the use of rest operator. There can be one rest operator used under destructuring operation 
console.log(`First item: ${firstStarterItem},third item: ${thirdStarterItem}, Other items: ${otherItems}`)

//Rest operator for objects
//In terms of objects while destructuring variable name has to be the same as object property name whose value we want
//We have to use {} this time not []
const {fri, ...weekDays} = restaurant.openingHours
console.log(weekDays)


//Rest can be used as arguments of a function


const add = (...numbers) =>{
    let sum=0;
    for(let i=0;i<numbers.length;i++) sum+=numbers[i]
    console.log(sum)
}
//passing elements directly
add(2,3,4)
add(1,8,3,7,3,84,9)
add(34,23,6,257,842,74,3,6,8,3) // rest operator is packing these elements in numbers variable as an array


//passing elements from an array to the add function
const array = [1,2,3,4,5]
//if we want to pass the array elements into the add function we have to use spread operator while passing
add(...array)
// the spread operator seperate all the elements while passing to add function and rest operator
// add all the seperated elements together to make an array before enetering into the function
//that's how we can pass an array as a parameter into a function


//another function example
restaurant.OrderPizza('Mushroom','Onion','Garlic','Becon') // first parameter will be stored in mainIngredients variable,
// other 3 parameters will be made as an array and will be stored in otherIngredients 


//So it can be said that spred operator seperate elements from an array or object
//Rest operator collect elements or object properties to make an array or object




