import { fifaData } from './fifa.js';
console.log(fifaData[0].Year);

console.log('its working');

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const getYear = (date) => {
    return fifaData.filter(data => {
        if(data.Year === date && data.Stage === 'Final'){
             console.log(data);
             return data["Away Team Name"];
        };  
    })
    [0]["Home Team Name"]
}

// const getYear = (date) => fifaData.filter(function(item){
//     if(item.Year === date && item.Stage === "Final"){
//         return console.log(`${item["Home Team Name"]}, ${item["Away Team Name"]}, ${item["Home Team Goals"]}, ${item["Away Team Goals"]} `);
//     };
// }); 

console.log(getYear(2014));
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
    return data.filter(item => item.Stage === 'Final')
}
console.log(getFinals(fifaData));

// console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    callback.map(function(item){
       console.log(item.Year)
    })
};

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(/* code here */) {

    /* code here */

};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

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
