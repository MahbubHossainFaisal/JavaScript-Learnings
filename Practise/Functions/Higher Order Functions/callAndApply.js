//use of this in object example

const BangladeshBiman = {
    airline: 'BangladeshBiman',
    code: 'BB',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} has booked a seat on ${this.airline} flight ${this.code}${flightNum}`)
        this.bookings.push({ flight: `${this.code}${flightNum}`, name })
    }

}

BangladeshBiman.book(111, 'Faisal')
BangladeshBiman.book(222, 'Farjana')

//console.log(BangladeshBiman.bookings)


//another airline object
const EuroCorp = {
    airline: 'EuroCorp',
    code: 'EC',
    bookings: [],
}

const bookFlight = BangladeshBiman.book;

//here bookFlight is storing the book function of the bangladeshBiman object

//if we write 
//bookFlight(111,'Imran') // this will give us error because it can't use the this property of the object

//But we have call method for this to manually operate 'this'

bookFlight.call(BangladeshBiman, 233, 'Khalid') // this will work

//then we can also use an object function for another object though the object don't have the function property under it

bookFlight.call(EuroCorp, 333, 'Asma')

/*but we have to remember that to use that function for both the objects we have to keep the property names/formats same
that has been used under the function. */



//Apply method

const flightData = [122,'Jabbar']
bookFlight.apply(BangladeshBiman,flightData)

// this apply method work can be done by call method also

bookFlight.call(BangladeshBiman,...flightData)