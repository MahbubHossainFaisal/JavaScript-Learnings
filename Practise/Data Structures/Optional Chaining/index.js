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



// we want to find the opening time of restaurant in monday if that time exist
//in traditional way what we will do is we will check it by if statement .

if(restaurant.openingHours && restaurant.openingHours.mon){
    console.log(restaurant.openingHours.mon.open)
} // This will give us no result and no error also because monday does not exist there
if (restaurant.openingHours && restaurant.openingHours.fri) {
    console.log(restaurant.openingHours.fri.open) // this wil give us the proper result
}

//We can do this with optional chaining very easily
//A property s exist if it is not undefined and not null
//If the property not exist it will be undefined
//console.log(restaurant.openingHours.mon.open) // this will give us error because restaurant.openingHours.mon is undefined and then restaurant.openingHours.mon.open means getting the property value of undefined
console.log(restaurant.openingHours.mon?.open) //this will give us undefined but won't give error
console.log(restaurant.openingHours.fri?.open) // this will give us the result of friday opening hour
//we can also check for multiple existence of properties
console.log(restaurant.openingHours?.fri?.open)


//Another example


const days = ['sat','sun','mon','tue','wed','thu','fri']

for (const day of days) {
    //if we want to use dynamic value below this we can't use restaurant.openingHours.day?.open
    //As day is a dynamic value,for dynamic values we have to use []
    const open = restaurant.openingHours[day]?.open || 'We are not available in this day!'
    console.log(`${day} opening status: ${open}`)
    // after console log we can see that sat has a property value though it is showing we aren't available
    //because the  open property value is 0, so we have to use co elliasing
    //instead of || after restaurant.openingHours[day]?.open, we have to use ??
   
}


//Example in terms of methods

console.log(restaurant.order?.(1,2) ?? 'This method does not exist')
console.log(restaurant.OrderPasta?.('floor','chicken','onion') ?? 'This method does not exist')
console.log(restaurant.orderRisotto?.(1, 2) ?? 'This method does not exist')


//Example of arrays
const user = [{name:'Faisal',age:23}]

//traditional way
if(user.length > 0){
    console.log(user[0].name)
}
else {
    console.log('Array is empty')
}

//optional chaining
console.log(user[0]?.name ?? 'Array is empty')
console.log(user[1]?.name ?? 'Array is empty')
