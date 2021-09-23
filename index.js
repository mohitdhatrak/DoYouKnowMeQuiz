var readlineSync = require("readline-sync");
const chalk = require("chalk");

var userName = readlineSync.question("What is your name ? ");
console.log(chalk.yellow("Hi", userName + ", I'm Mohit. Here's a quiz on how well do you know me... "));
console.log("  ");

var score = 0;

function quiz(question, answer) {
 var userAnswer = readlineSync.question(question);
 if(userAnswer.toUpperCase() === answer.toUpperCase()) {
   console.log(chalk.green("That's right :)"));
   score++;
 }
 else {
   console.log(chalk.red("That's wrong :("));
 }
  console.log(chalk.blue("score =", score));
  console.log("-------------------------------------------");
  console.log("  ");
}

var questionBank = [
  {
    question: "What is my age? ",
    answer: "18"
  }, 
  {
    question: "What's my Birthplace? (Name the city) ",
    answer: "Mumbai"
  }, 
  {
    question: "What is the name of my first school/nursery? ",
    answer: "Jai Nursery"
  },
  {
    question: "Which sport do I like the most? ",
    answer: "Cricket"
  },
  {
    question: "What is my favourite food dish? ",
    answer: "Chicken Biryani" 
  }
];

for(var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer); 
}

console.log(chalk.magenta("Your Final score is", score + " out of 5"));
console.log("  ");
console.log(chalk.cyan("Here is the Leaderboard - ")); 
var leaderBoard = [
  {
    name: "Mohit ",
    score: 5
  },
  {
    name: "Rohit ",
    score: 4
  },
  {
    name: "Chitra ",
    score: 4
  }
];

for(i = 0; i < leaderBoard.length; i++) {
  console.log(chalk.green(leaderBoard[i].name, leaderBoard[i].score));
}

console.log("  ");

var isHighScoreBroken = false;

for(i = 0; i < leaderBoard.length ; i++) {
  if(score > leaderBoard[i].score) {
    console.log(chalk.yellow("Congratulations, you have secured rank", i+1, "on the leaderboard! If want your name on the leaderboard, send me a screenshot of your score. Thank you!"));
    isHighScoreBroken = true;
    break;
  }
}

if(isHighScoreBroken === false) {
  console.log(chalk.yellow("Thank you for playing the quiz!"));
}  
