//primitives

var a = 23;
var b = a;
a = 54;
console.log(a);
console.log(b); // here I'm creating a copy of a using b variable so b's value will remain the same which was a's value first

//objects

var Faisal = {
  job: "Student",

  age: 23,
};

var Shanta = Faisal;

Faisal.job = "Web Developer";
Shanta.job = "Qc Officer";

console.log(Faisal.job);
console.log(Shanta.job);

//Here we are not creating a copy in objects . Here Shanta object is pointing to the same object that Faisal is pointing .
//If I change any one of the the object's property value ,it will be occured for both the objects.

//objects and primitives together

age = 23;

var obj = {
  city: "Dhaka",
};

function change(a, b) {
  a = 34;
  b.city = "Narayanganj";
}

change(age, obj);

console.log(age); //Here we found that the variable value
// which was declared globally remain the same because the value
// a=34 will remain under that scope in change function after that it becomes the same again

console.log(obj.city); //but in terms of object the value will be changed because we don't pass the real object .We just pass
//the reference . So if anywhere we change any property of the object the valus will be changed for all.
