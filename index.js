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
   console.log(chalk.green("The correct answer is", answer));
 }
  console.log(chalk.blue("score =", score));
  console.log("-------------------------------------------");
  console.log("  ");
}

var questionBank = [
  {
    question: "Q.1) What is my age? ",
    answer: "18"
  }, 
  {
    question: "Q.2) What's my Birthplace? (Name the city) ",
    answer: "Mumbai"
  }, 
  {
    question: "Q.3) What is the name of my first school/nursery? ",
    answer: "Jai Nursery"
  },
  {
    question: "Q.4) Which sport do I like the most? ",
    answer: "Cricket"
  },
  {
    question: "Q.5) What is my favourite food dish? ",
    answer: "Chicken Biryani" 
  },
  {
    question: "Q.6) What is my mother tongue? ",
    answer: "Marathi" 
  },
  {
    question: "Q.7) Which format in cricket do I like the most, T20, ODI or Test cricket? ",
    answer: "Test cricket"
  },
  {
    question: "Q.8) Out of summer, winter and rainy, which season do I like the most? ",
    answer: "Summer" 
  },
  {
    question: "Q.9) Which is my favourite PC game, GTA: San Andreas, CS: GO, Call of Duty 4: Modern Warfare, Cricket 07 ? ",
    answer: "GTA: San Andreas" 
  },
  {
    question: "Q.10) Which subject do i hate the most, mathematics, physics or chemistry? ",
    answer: "Chemistry" 
  }
];

for(var i = 0; i < questionBank.length; i++) {
  quiz(questionBank[i].question, questionBank[i].answer); 
}

console.log(chalk.magenta("Your Final score is", score + " out of 10"));
console.log("  ");
console.log(chalk.cyan("Here is the Leaderboard - ")); 
var leaderBoard = [
  {
    name: "Mohit ",
    score: 10
  },
  {
    name: "Chitra ",
    score: 9
  },
  {
    name: "Rohit ",
    score: 9
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
