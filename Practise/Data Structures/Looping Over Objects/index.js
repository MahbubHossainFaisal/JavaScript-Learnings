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
            open: 6,
            close: 21
        }
    },
    

}


//Loop over object property name

const objectPropertyNames = Object.keys(restaurant.openingHours)
console.log(objectPropertyNames) // will give us an array

//we can loop over array then.
let str = `The restaurant opens on ${objectPropertyNames.length} days: `
for (const day of objectPropertyNames) {
    str += `${day}, `
}
console.log(str)


//Loop over object property values

const values = Object.values(restaurant.openingHours)
console.log(values)
let i=1;
for(const {open,close} of values){
    console.log(`On day ${i} restaurants opens at: ${open} and closes at ${close}`)
    i++;
} //while destructuring objects property name should be same as the original


//Loop over the full object (both property name/key and value)

const entries = Object.entries(restaurant.openingHours)
console.log(entries)

for (const [key,{ open, close }] of entries) {
    console.log(`On day ${key} restaurants opens at: ${open} and closes at ${close}`)
    i++;
} //while destructuring objects property name should be same as the original