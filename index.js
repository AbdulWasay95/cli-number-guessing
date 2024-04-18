#! /usr/bin/env node
import inquirer from "inquirer";
// 1- computer will generate a random number
// 2= user input for guessing number
// 3- compare user input and computer generated number and give result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { message: "Guess any number between 1-6 :", type: "number", name: "guessedNumber" },
]);
console.log(answers);
if (answers.guessedNumber === randomNumber) {
    console.log("Congratulations ! you guessed right number .");
}
else {
    console.log("You guessed wrong number.");
}
