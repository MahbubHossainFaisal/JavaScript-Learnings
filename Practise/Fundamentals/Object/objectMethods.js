const Faisal = {
    name: 'Mahbub Hossain',
    Institute: 'AIUB',
    birthYear: 1998,
    Nationality: 'Bangladeshi',
    Occupation: 'Software Engineer',
    Friends : ['Sakib','Robin','Nijhum','Imran','Anoy'],
    hasVoterID : false,
    //adding a function property
    // age : function () {
    //     console.log(this)
    //     return 2021-this.birthYear
    // }
    // We can also do this . It will save the time of calculation again and again every time we call the object
    calcAge : function (){
        this.age = 2021 - this.birthYear
        return this.age
    },

    getSummary : function () {
       
        return `${this.name} is a future ${this.Occupation} . Currently he is studying at ${this.Institute} and ${this.hasVoterID ? 'He is a voter ' : 'He is not a voter till now'} `
    }

}

const ageOfFaisal = Faisal.calcAge()
console.log(ageOfFaisal)
console.log(Faisal.getSummary())



