const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//For of loop 

console.log('-------FOR OF--------')
for (const movement of movements) {
    if (movement > 0) {
        console.log(`User deposited ${movement} taka`)
    }
    else {
        console.log(`User withdrawed ${movement} taka`)
    }
}

//ForEach loop

console.log('--------FOR EACH--------')

movements.forEach((movement) => {
    if (movement > 0) {
        console.log(`User deposited ${movement} taka`)
    }
    else {
        console.log(`User withdrawed ${movement} taka`)
    }
})



//For of loop  in terms of getting indexes

console.log('-------FOR OF with INDEX--------')
for (const [index, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Data ${index + 1} : User deposited ${movement} taka`)
    }
    else {
        console.log(`Data ${index + 1} : User withdrawed ${movement} taka`)
    }
}

//when we use for of loop we have to get the index using entries method and also we have
// to destruct



//ForEach loop in terms of getting the index 

console.log('--------FOR EACH--------')

movements.forEach((movement, index, arr) => {
    if (movement > 0) {
        console.log(`Data ${index + 1} : User deposited ${movement} taka`)
        console.log(`Total data: ${arr}`)
    }
    else {
        console.log(`Data ${index + 1} : User withdrawed ${movement} taka`)
        console.log(`Total data: ${arr}`)
    }
})

//in forEach loop we can get three values by passing arguments, 
// particular element , index value, whole array elements


// Fundamental difference between them

//We cannot break out from forEach loop but we can use continue or break statements in for of loop.
