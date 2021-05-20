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

//Task 1
const [players1,players2] = game.players
//Here players1 denotes the first element of game.players first element which is an array
//Here players2 denotes the second element of game players second element which is also an array
console.log(players1)
console.log(players2)

//Task2

const [gk,...fieldPlayers] = players1
console.log(gk)
console.log(fieldPlayers)

//Task3

const allPlayers = [...players1,...players2]
console.log('All plyers: ',allPlayers)

//Task4

const players1Final = [...players1,'Thiago','Caitinho','Perisic']
console.log(players1Final)

//Task5
//variables under {} name should be same as object property
const {team1,x:draw,team2} = game.odds
console.log(team1,draw,team2)

//Task6
const printGoals = (...players) =>{
    console.log(`${players.length} goals were scored!`)
    for(let i=0;i<players.length;i++){
        console.log(players[i])
    }
}

printGoals('Davies', 'Muller', 'Lewandowski','Kimmich')
printGoals(...game.scored)


//Task7
team1 < team2 && console.log('Team1 is more likely to win')
team2 < team1 && console.log('Team2 is more likely to win')

