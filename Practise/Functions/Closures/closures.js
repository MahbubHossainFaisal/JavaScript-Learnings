const bookingSystem = function () {
    let passangerCount = 0;
    return function () {
        passangerCount++;
        console.log(`${passangerCount} passangers`)
    }
}

const booker = bookingSystem()

booker()
booker()
booker()

/*
Here we thought that booker will execute the bookingSystem function everytime. So We should
have got 1 passangers everytime.
But booker is mainly using the returned function from bookingSystem.
and that returned function is using the variable passangerCount from it's parent function.
So it can use the variable and change it accordingly.
The returned function using it's parent function's property every time when it is being called though the parent function is not excecuting.
It has executed just once when booker variable called it.
So, this process is called closure.
It can be said that closure give the permission to a function to use the variables of it's parent function even after
that parent function has returned.The child function keeps the reference of it's outer scope even after the outer scope is gone.
*/