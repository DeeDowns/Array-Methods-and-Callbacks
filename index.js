import { fifaData } from './fifa.js';

console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
const [world2014] = fifaData.filter((item) => item.Year === 2014 && item.Stage === "Final")
console.log(world2014["Home Team Name"])
console.log(world2014["Away Team Name"])
console.log(world2014["Home Team Goals"])
console.log(world2014["Away Team Goals"])

let winner = ''
if(world2014["Home Team Goals"] > world2014["Away Team Goals"]){
    winner = world2014["Home Team Name"]
}else {
    winner = world2014["Away Team Name"]
}
console.log(winner)


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

// function getFinals(data) {
//     let finalArr = []
//     data.filter(function(item){
//       if(item.Stage === "Final"){
//          finalArr.push(item);
//         };
//     });
//     return finalArr;
// };


// const getFinals = (data) => data.filter(function(item){
//     if(item.Stage === "Final"){
//         return item.Stage
//     };
// })

function getFinals(data){
    return data.filter((item) => item.Stage === 'Final')
}
console.log(getFinals(fifaData));



/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = []
    return years = callback.map((item) => item.Year)

};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = []
    callback.filter((item) => {
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"])
        } else if(item["Away Team Goals"] > item["Home Team Goals"]){
            winners.push(item["Home Team Name"])
        }else{
            winners.push(item["Win conditions"])
        }
    })
    return winners;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnersCB,yearsCB) {
    let string = [];
    string.push(yearsCB, winnersCB)
    
    console.log(string)
   


};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const homeGoals = data.map((item) => item["Home Team Goals"])
    const AwayGoals = data.map((item) => item["Away Team Goals"])
    const homeGoalsTotal = homeGoals.reduce((acc, item) => {
        return acc + item
    }, 0);
    const awayGoalsTotal = AwayGoals.reduce((acc, item) => {
        return acc + item
    }, 0);
    let averageGoals = [];
    let homeAvg = homeGoalsTotal / data.length;
    let awayAvg = awayGoalsTotal / data.length;
    averageGoals.push(`average number of home team goals: ${homeAvg.toFixed(2)}, average number of home team goals: ${awayAvg.toFixed(2)}`)
    return averageGoals;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
