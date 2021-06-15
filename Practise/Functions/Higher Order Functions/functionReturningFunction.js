const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`)
    }
}

const muslimGreeting = greet('Assalamualaikum!')
const hinduGreeting = greet('Namaste!')

//Now here muslimGreeting and hinduGreeting variable becomes a function .

muslimGreeting('Faisal Hossain')
hinduGreeting('Pinak Rai')

//We can call directly also
greet('Hail')('Hydra')

//Greet function using arrow function

const greetArrow = greeting => name => console.log(`${greeting} ${name}`)

greetArrow('Adaab!')('Mustafa')