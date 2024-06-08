#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
async function playgame() {
    let Maxattempts = 4;
    let attempt = 0;
    const sysNumber = Math.floor(Math.random() * 50);
    console.log('\t\t\t\t\t\t\t\t\t\t❗❗', chalk.bold.cyanBright.underline('Welcome To Number Guessing Game'), '❗❗\n', chalk.cyan.bold('\n\t\t\t\t\t\t\t\t\t\t\t ⭕️ You have 5 attempts ⭕️\n\n'));
    while (attempt <= Maxattempts) {
        const answer = await inquirer.prompt([
            {
                type: "input",
                name: "userGuess",
                message: chalk.bold.yellowBright("\t\t\t\t\t\t\t\tPlease enter a number between 1-50: 💻\n"),
                validate: function check(input) {
                    const userInput = parseInt(input);
                    if (isNaN(userInput) || userInput < 1 || userInput > 50) {
                        return chalk.redBright.bold("\t\t\t\t\t\t\t\tError: Please enter a number between 1 - 100 only.\n");
                    }
                    return true;
                }
            }
        ]);
        console.log(`\t\t\t\t\t\t\t\t${answer.userGuess}:`, chalk.magentaBright.bold(`Your Guess number❗\n`));
        if (answer.userGuess === sysNumber) {
            console.log(chalk.greenBright.bold("\t\t\t\t\t\t\t\tYour guess is correct!You win.👍\n"));
            break;
        }
        else if (answer.userGuess < sysNumber) {
            console.log(chalk.redBright.bold("\t\t\t\t\t\t\t\tToo low, try again 👻\n"));
            console.log(chalk.cyan.bold(`\t\t\t\t\t\t\t\tAttempts remaining: `), `${Maxattempts}\n`);
        }
        else if (answer.userGuess > sysNumber) {
            console.log(chalk.redBright.bold("\t\t\t\t\t\t\t\tToo big, try again 👻\n"));
            console.log(chalk.cyan.bold(`\t\t\t\t\t\t\t\tAttempts remaining: `), `${Maxattempts}\n`);
        }
        Maxattempts--;
    }
    console.log(chalk.yellowBright.bold("\t\t\t\t\t\t\t\tSorry You have run out of attempts 😞\n"));
    console.log(chalk.yellowBright.bold("\t\t\t\t\t\t\t\tBetter Luck Next Time 😉\n"));
}
playgame();
