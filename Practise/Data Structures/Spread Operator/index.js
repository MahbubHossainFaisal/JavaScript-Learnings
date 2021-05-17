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
    }

}


const arr1 = [1, 2, 3]

const arr2 = [4, 5, 6]

//spread operator seperates each element of an array.

const newArray = [...arr1, ...arr2, 7, 8, 9]
console.log(newArray)


//Now suppose we want to add elements in the restaurant main menu.
const newMainMenu = [...restaurant.mainMenu, 'Chicken chap', 'Chicken Swarma']
restaurant.mainMenu = newMainMenu

console.log(restaurant.mainMenu)

//Joining start menu and main menu together
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(wholeMenu)

//Iterables: arrays,strings,maps,sets and not objects

// use of spread operator on string

const str = 'Faisal'
console.log(...str) // spread operator can seperate all the characters of the stirng


//but 
//console.log(`${..str}  individuals`) // this is not possible because we can use spread operator when building an array or passing values to a function

//Spread operator as function parameter

const pastaIngredients = ['Mushrooms', 'Aspargus', 'Cheese']
restaurant.OrderPasta(...pastaIngredients)


//Spread operator on objects
const newRestaurant = { Started: 1991, ...restaurant, Founder: 'Mahbub Hossain' }
console.log(newRestaurant)





