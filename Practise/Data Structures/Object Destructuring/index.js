'use-strict'

const restaurant = {
    name: 'classico italiano',
    location: 'Dhaka 1203, Bashundhara R/A,Block C',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Burger', 'Risotto'],
    openingHours:{
        thu:{
            open: 12,
            close: 22,
        },
        fri:{
            open:11,
            close:23
        },
        sat:{
            open:0,
            close:24
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    DeliveryOrder : function({time,address,starterCourse,mainCourse,pay=100}){
        console.log(`Order recieved! You have ordered ${this.starterMenu[starterCourse]} as your starter and ${this.mainMenu[mainCourse]} as your main course.\n
        Your order will be arrived in '${address}' in this address. \n
        It will be arrived at ${time} \n
        you have to pay ${pay} taka as delivery charge`)
    }

}

/*Destructuring object property as function pararameter 
Suppose We call a function under an object ,while calling the function
from outside we sent an object as parameter.
Inside the function we can seperate the obejct properties by destructuring
*/
restaurant.DeliveryOrder({
    time: '10:30 AM',
    address: 'Bashundhara c block road 6 house 31',
    starterCourse:2,
    mainCourse:1
})

/*destructuring 
if we want to destructure particular properties from an object ,then
we have to use the individual property name in the curly braces that we want to get the values of
*/


let {name,openingHours, starterMenu,categories} = restaurant
console.log(name,openingHours,starterMenu,categories)

// we can change the property names while destructuring 

const {name:restaurantName, starterMenu:Menu, categories: catalogue} = restaurant
console.log(restaurantName,Menu,catalogue)

//Adding default values if any object property is not found while destructuring
//If object property is already found there will be no use of the default value.Original object property will be applied

let {menu = ['Biriyani'], starterMenu:starter = ['Sharbat']} = restaurant

console.log(menu,starter)

//Mutating variables
//suppose we have object properties same as variable names
//We want to get the property values ,not the variable values
//we can mututate variables like this.

const object ={
    a:222,
    b:333,
    c:444
}

let a = 111;
let b = 124;


({a,b} = object)
console.log(a,b)

//Nested object destructuring

let{openingHours:days} = restaurant
console.log(days)
const {fri: {open,close}} = days
console.log(open,close)










