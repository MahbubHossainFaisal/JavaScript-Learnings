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


// objects can't be iterable but map does
//But we can convert objects into map

const openingHoursMap = new Map(Object.entries(restaurant.openingHours))

console.log(openingHoursMap)

//Now openingHours object is converted into map and stored in openingHoursMap,so we can iterate them

for(const [key,{open,close}] of openingHoursMap) {
    console.log(`${key} : ${open} is opening time and ${close} is closing time`)
}


// A quiz app using map

const question = new Map([
    ['question', 'What is the best programming language on earth?'],
    [1,'C'],
    [2,'Java'],
    [3,'Csharp'],
    [4,'JavaScript'],
    ['answer',4],
    [true,'Correct answer'],
    [false, 'Wrong answer'],
])

console.log(question)

console.log(question.get('question'))
for(const [key,value] of question){
    if(typeof key === 'number'){
        console.log(`Answer ${key} : ${value}`)
    }
}

const answer = Number(prompt('Enter your answer:'))

answer === question.get('answer') ? console.log(question.get(true)) : console.log(question.get(false))

//converting map to array
const arr = [...question] // it will convert the map to a 2d array

console.log(arr[0][0])
console.log(arr[0][1])


//map properties

console.log(question.entries())
console.log(question.keys())
console.log(question.values())

// we can take all the individual properties of map and make them an array
//say we want an array with all the keys of the map

const keyArray = [...question.keys()]
console.log(keyArray)

//say we want an array with all the values of the map
const valueArray = [...question.values()]
console.log(valueArray)

