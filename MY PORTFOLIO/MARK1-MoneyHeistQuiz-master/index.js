const readline = require('readline-sync');

const chalk = require('chalk');

var score = 0;

var questions = [
  questionOne = {
    question : "Where is this Series based ? \n a) Spain \n b) USA\n c) Russia \n d) France ",
    answer : "a"
  },
  questionTwo = {
    question : "What is the real name of Professor in Money Heist ?\n a) Sergio Marquina \n b) Raquel Murillo \n c) Silene Oliveira \n d) Andrés de Fonollosa ",
    answer : "a"
  },
  questionThree = {
    question : "How Many Seasons of Money Heist are currently available on OTT platform ? \n a) 2 \n b) 3 \n c) 5 \n d) 4 ",
    answer : "d"
  },
  questionFour = {
    question : "When did Money Heist First Season Release ? \n a) 2 May 2017 \n b) 31st July 2017 \n c) 23rd January 2018 \n d) 15th November 2017 ",
    answer: "a" 
  },
  questionFive = {
    question : "What is the name of Police officer who later turns a robber in Money Heist ? \n a) Silene Oliveira \n b) Raquel Murillo \n c) Andrés de Fonollosa \n d) Aníbal Cortés ",
    answer : "b"
  }
]

function play(question, answer){
  var userAnswer = readline.question(chalk.bgCyan(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    score = score + 1;
    console.log(chalk.bgGreen.bold("Correct! :-)"));
  } else{
    console.log(chalk.bgRed("Wrong! :-("));
  }
  console.log("Current Score -> "+score);
}
var userName = readline.question("What is Your Name ? ");
console.log("Welcome "+chalk.bgYellow.bold(userName)+"to the Money Heist Quiz");
console.log("**Each Question Carries 1 point but there is no negative marking for wrong answer **");

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgMagenta("----------------------------------------------------"));
console.log("Thank You For Playing with me !");
console.log("Your Final Score is -> "+score);

