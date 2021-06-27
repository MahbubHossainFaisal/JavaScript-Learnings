// ForEach method for Maps and Sets


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);


currencies.forEach((value, key, map) => {
    console.log(`${key} : ${value}`)
    console.log(map)
})

// here for maps, for each parameters are first the value, then the key and then the whole map data

//Sets
const worldCurrencies = new Set(['USD', 'EURO', 'DINER', 'POUND', 'TAKA', 'RUPI', 'EURO', 'POUND', 'POUND', 'RUPI'])

worldCurrencies.forEach((value, key, set) => {
    console.log(`${key} : ${value}`)
    console.log(set)
})

// As set has no key , so the key and value parameter values will be same in terms of set