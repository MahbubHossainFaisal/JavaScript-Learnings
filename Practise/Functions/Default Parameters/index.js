//Default parameters for function

const bookingInfo = []

//we can use variables while giving parameter default valus but we have to keep in mind that
//the variable is declared earlier
function createBooking(flightName='LH123',numOfPassangers=1,priceOfTicket=199*numOfPassangers){
    const bookings = {
        flightName,
        numOfPassangers,
        priceOfTicket
    }
    
    
    bookingInfo.push(bookings)
    return bookings
}

const booking1 = createBooking('LH412',10,220)
console.log(booking1)
const booking2 = createBooking('LH333', undefined , 112)
console.log(booking2)
const booking3 = createBooking(undefined,8,222) // if i want to use the default value i have to pass undefined as parameter
console.log(booking3)
console.log(bookingInfo)
