/*
Implement a timer which will beep after a specified amount of time 
has passed. The user can specify an unlimited number of alarms 
using command line arguments
Example usage:

node timer1.js 10 3 5 15 9
*/
//import readline
const readline = require('readline');

//set input and output values
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//ask the user how long the timer should be, and pass time in as argument
rl.question('How many seconds?', (userInput) => {
  //capture user input and split into an array
  let times = userInput.split(" ");

  //loop through array and pass in time values
  //if user does not input anything, do not run loop, no sound
  if (userInput !== "" && userInput > 0) {
    for (let i = 0; i < times.length; i++) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, times[i] * 1000);
    }
  }
  //relinquish control over IO streams, stop listening
  rl.close();
});
