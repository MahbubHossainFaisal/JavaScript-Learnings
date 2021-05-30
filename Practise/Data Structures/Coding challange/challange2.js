const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// task1
for(const [index,name] of game.scored.entries()){
    console.log(`Goal ${index+1} : ${name}`)
}

// task2

const odds = Object.values(game.odds)
let average = 0

for(const odd of odds){
    average +=odd
}
average /= odds.length
console.log(average)


//task3

for(const [team,odd] of Object.entries(game.odds)){
    if(team === 'x'){
        console.log(`Odd of draw: ${odd}`)
    }
    else{
    
        console.log(`Odd of victory ${game[team]}: ${odd}`)
    }
}