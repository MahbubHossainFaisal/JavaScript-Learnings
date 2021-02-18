 const Mark = {
     name : "Mark Miller",
     mass : 78,
     height : 1.69,
     calcBMI : function(){
         this.bmi = this.mass/(this.height*this.height)
         return this.bmi
     }
 }

  const John = {
     name : "John Smith",
     mass : 92,
     height : 1.69,
     calcBMI : function(){
         this.bmi = this.mass/(this.height*this.height)
         return this.bmi
     }
 }


 Mark.calcBMI() // You have to call this function first else under this function we have made this.bmi property it won't work below
 John.calcBMI() // You have to call this function first else under this function we have made this.bmi property it won't work below

 if(Mark.bmi > John.bmi){
     console.log(`Mark's BMI ( ${Mark.bmi.toFixed(2)} ) is higher than John's ( ${John.bmi.toFixed(2)} )`)
 } else {
     console.log(`John's BMI ( ${John.bmi.toFixed(2)} ) is higher than Mark's ( ${Mark.bmi.toFixed(2)} )`)
 }