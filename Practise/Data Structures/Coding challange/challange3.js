const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

//Task1

const gameEventsArray = [...gameEvents.values()] // making an array only with the map values

const events = new Set(gameEventsArray)
console.log(events)

//Task2
gameEvents.delete(64)
console.log(gameEvents)


//Task3
//Total events in the map is 11
//Total time is 92 mins

const time = [...gameEvents.keys()]
const lastTime = time.pop()

console.log(`An event happened, on average, every ${lastTime/gameEvents.size} minutes`)

//Task4

for(const [key,value] of gameEvents){
    if(key <= 45){
        console.log(`[FIRST HALF] ${key} : ${value}`)
    }
    else{
        console.log(`[SECOND HALF] ${key} : ${value}`)
    }
}