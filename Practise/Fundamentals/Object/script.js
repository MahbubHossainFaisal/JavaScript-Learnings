// dot vs brackets in object use

// when we try to read a property of an object we can use both like dot or []

const Faisal = {
    name: 'Mahbub Hossain',
    Institute: 'AIUB',
    age: 23,
    Nationality: 'Bangladeshi',
    Occupation: 'Software Engineer',
    Friends : ['Sakib','Robin','Nijhum','Imran','Anoy']
}

const objName = Faisal.name //we can use like this
const objAge = Faisal['age'] // we can also use like this

console.log(objName)
console.log(objAge)



//Adding properties from outside
Faisal.DOB = '12th july 1998'
Faisal['githubName'] = 'MahbubHossainFaisal'
console.log(Faisal)

//In this case always dot operator is preferable
//But in terms of prompt values For example,

let value = prompt('Give a property you want to know')
console.log(Faisal.value) //this will return undefined
console.log(Faisal[value]) 

console.log(`Faisal has ${Faisal.Friends.length} friends and his best friend among them is ${Faisal.Friends[1]}`)
  