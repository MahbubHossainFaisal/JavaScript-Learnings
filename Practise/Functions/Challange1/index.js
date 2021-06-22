const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    //for task 1
    vote() {
        let answer = prompt(`${this.question}\n${this.options.join('\n')} \nwrite option number`)

        const intAnswer = parseInt(answer)

        typeof intAnswer === 'number' &&
            intAnswer <= this.options.length ?
            this.answers[intAnswer]++ :
            console.log('Insert proper input!')

        this.displayResults()
        this.displayResults('string')
    },
    //for task 2
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers)
        }
        else if (type === 'string') {
            console.log(`Poll results are ${this.answers.join(', ')}`)
        }
    }

};

//Task 1

document.querySelector('.ans').addEventListener('click', poll.vote.bind(poll))

//task 3
//suppose we don't want displayResults method to print answers array we have input
//we rather want to use  [1, 5, 3, 9, 6, 1] this array as input
//how we can make the display result print this array ? using call method.

poll.displayResults.call({answers: [1,5,3,9,6,1]})
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] },'string')

//here what we have done is we just changed the answer property value from outside using call method
//when we used call method , the this method of the property will now point to the array we have passed