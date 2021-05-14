'use-strict'

const restaurant = {
    name: 'classico italiano',
    location: 'Dhaka 1203, Bashundhara R/A,Block C',
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta','Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Burger', 'Risotto'],
    order: function(starterIndex,mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}

//Suppose we want to get the first and second values of catagories array under restaurant object

let [first,second] = restaurant.categories
console.log(first,second)

//Suppose we want to get the first and third values of catagories array under restaurant object
let [main, ,secondary] = restaurant.categories
console.log(main,secondary)

//Now if we want to swap the values of first and second we can do this using destructuring
let temp = main
main = secondary
secondary = temp
console.log(main,secondary)

// destructuring of array returning from a function under an object
const [starterCourse,mainCourse] = restaurant.order(2,0)
console.log(starterCourse,mainCourse)

//nested destructuring
const arr = [1,2,[3,4]]
const [i,,[j,k]] = arr;

console.log(i,j,k);

// Adding default values
const [p,q=1,r,s=1] = [10,,20]
console.log("p value: ",p);
console.log("q value: ", q);
console.log("r value: ", r);
console.log("s value: ", s);




