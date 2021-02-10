//tip calculator;

let tip1 = 15/100;
let tip2 = 20/100;

let bill = [275,40,430];

for(let i=0;i<3;i++){
    bill[i]>=50 && bill[i]<=300 ? console.log(`Tip: ${bill[i]*tip1}`) : console.log(`Tip: ${bill[i]*tip2}`)
}

