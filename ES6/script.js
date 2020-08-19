//this keyword in arrow function.

//ES5 example

var greenBox = {
    color: 'Green',
    position: 1,
    click: function (){ //this function can access the properties using this operator but that anonymous function can't access .
    // So we have to create a variable under this function to access the object properties so that we can access that variable in the anonymous function.
        var property = this; // 
        document.querySelector('.green').addEventListener('click',function (){
            
            var str = 'The box is ' + property.color + ' and the position is '+ property.position ;
            alert(str);
        });
    }
}

greenBox.click();

//In arrow function we can also use the this operator in the anonymous function also.
//we don't have to access it using a variable in the click function like in ES5 method.

var greenBox = {
    color: 'Green',
    position: 1,
    click: function () { 
        document.querySelector('.green').addEventListener('click', ()=> {

            var str = 'The box is ' + this.color + ' and the position is ' + this.position;
            alert(str);
        });
    }
}
greenBox.click();