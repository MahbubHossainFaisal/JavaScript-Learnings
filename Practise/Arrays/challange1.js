const juliaData = [3, 5, 2, 12, 7]
const kateData = [4, 1, 15, 8, 3]

const juliaDataCopy = juliaData.slice(1, -2)
console.log(juliaDataCopy)

const allDogData = juliaDataCopy.concat(kateData)
console.log(allDogData)

allDogData.forEach((dog, index) => {
    const check = dog < 3 ? 'is still a puppy' : 'is an adult'
    console.log(`Dog number ${index + 1} ${check} ${dog >= 3 ? `and is ${dog} years old` : ''}`)
})