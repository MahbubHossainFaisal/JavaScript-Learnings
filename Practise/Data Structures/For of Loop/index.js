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
    OrderPizza: function (mainIngredient, ...otherIngredients) {
        console.log('Main ingredient: ', mainIngredient)
        console.log('Other ingredients: ', otherIngredients)
    }

}


const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
console.log(menu)

//For of loop
for (const item of menu) console.log(item)

//entries method of for of loop
//using this method we can get the index value and element of the array at the same time

for (const item of menu.entries()) console.log(item)

//in above,every item will be an individual array with 2 elements : the index and the value
//we can also destructure them

for(const [index,value] of menu.entries()){
    console.log(`Number ${index+1} is ${value}`)
}