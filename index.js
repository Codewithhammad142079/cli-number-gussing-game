#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to codeWitHammad - ClI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        massage: "Enter your guess Number(Number Limit form 1 to 5):",
    },
]);
if (answer.userGussedNumber === randomNumber) {
    console.log("Congratulation ! you guess tha rigth Number.");
}
else {
    console.log("Opps, you guess a wrong Number");
}
