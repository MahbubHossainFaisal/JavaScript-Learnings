//Short circuiting means when comparing - If first operand is the truthy value it will be output directly
//the other operand will not be evaluated
console.log(3 || 'faisal') //3
console.log('' || 'faisal') //faisal
console.log(true || 0) // true
console.log(undefined || null) //null


// 

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


//Suppose we want to know the number of guests that will come in the restaurant
//if the number of guest property not found we want to give it a common name. 


const numGuest1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(numGuest1)

//using  short circuiting method
const numGuest2 = restaurant.numGuests || 10
console.log(numGuest2)


//another example
if(restaurant.OrderPasta){
    restaurant.OrderPasta('flour','salt','lemon')
}

// this can be written using short circuitting method

restaurant.OrderPasta && restaurant.OrderPasta('flour', 'salt', 'lemon')

