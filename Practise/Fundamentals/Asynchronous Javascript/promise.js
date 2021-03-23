const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            type: 'Consultancy',
            date: '1st April,2021',
            numOfpeople: '12',
            meetingPlace: 'Microsoft Teams'
        }

        resolve(meetingDetails);
    } else {    
        reject(new Error('Sorry! The meeting has already been scheduled')) // to create an error we have to use new Error
    }
})

meeting.then((res)=>{
    console.log(JSON.stringify(res));
}).catch((err)=>{
    console.log(err.message);
})

console.log('This will be printed first though it has been declared last because of asynchronous behaviour of javascript')


//Creating multiple promise , and showing them together though each promise take different time

const promise1 = Promise.resolve(`Promise 1 will complete immediately`)

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(`Promise 2 will take 3 seconds to complete`)
    },3000)
})

//Promise.all method for showing all promise together
Promise.all([promise1,promise2]).then(res=> console.log(res)) // this will execute later than promise.race method

//Promise.race method to show only the that promise which executes first
Promise.race([promise1,promise2]).then(res=>console.log(res))