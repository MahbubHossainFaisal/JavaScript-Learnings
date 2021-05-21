const Restaurant = {
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
    OrderPizza: function (mainIngredient, ...otherIngredients) {
        console.log('Main ingredient: ', mainIngredient)
        console.log('Other ingredients: ', otherIngredients)
    }

}


// We can declare the restaurant object like this below
//We can seperate the inside objects from the main object and call them under the main object
//we can define properties in another way
//we can write object functions in another way

const weekDays = ['sat','sun','mon','tue','wed','thu','fri']

const openingHours = {
    [weekDays[5]]: {
        open: 12,
            close: 22,
        },
    [weekDays[6]]: {
        open: 11,
            close: 23
    },
    [weekDays[0]]: {
        open: 0,
            close: 24
    }
}


const restaurant = {
    name: 'classico italiano',
    location: 'Dhaka 1203, Bashundhara R/A,Block C',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Burger', 'Risotto'],
    //es6 enhanced object literals
    openingHours,
    //new method of writing objects that stores a function
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    DeliveryOrder({ time, address, starterCourse, mainCourse, pay = 100 }) {
        console.log(`Order recieved! You have ordered ${this.starterMenu[starterCourse]} as your starter and ${this.mainMenu[mainCourse]} as your main course.\n
        Your order will be arrived in '${address}' in this address. \n
        It will be arrived at ${time} \n
        you have to pay ${pay} taka as delivery charge`)
    },
    OrderPasta (ingredient1, ingredient2, ingredient3) {
        console.log(`You have selected ${ingredient1} ${ingredient2} and ${ingredient3} for making pasta!`)
    },
    OrderPizza (mainIngredient, ...otherIngredients) {
        console.log('Main ingredient: ', mainIngredient)
        console.log('Other ingredients: ', otherIngredients)
    }

}

console.log(restaurant)



