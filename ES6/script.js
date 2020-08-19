//Blocks and IIFE

//In ES5 there were IIFEs
(function () {
  var a = 23;
  console.log(a);
})();
//console.log(a);will give an error! as it is outside the IIFE

//In ES6 there is Blocks which is more easier to define and get data privacy

{
  let a = 20;
  const b = 30;
  var c = 15;
  console.log(a);
  console.log(b);
  console.log(c);
}
//console.log(a); //Will give errors
//console.log(b);//will give errors
console.log(c); //This will give no error because we use var this time and it can show values even outside the scope or block.
