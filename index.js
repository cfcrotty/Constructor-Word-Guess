const inquirer = require('inquirer');
const colors = require('colors');
var fs = require("fs");
const word = require("./Word.js");

const words = ["javascript", "server side"];
var remainingGuess = 10;
var guessWord = "";
var canPlay = true;
var numWord = 0;
var lettersGuessed = [];
var wordsDone = [];

/*
const guessWord = new word("the");
console.log(guessWord.wordString());
console.log(guessWord.checkCharacter("t"));
console.log(guessWord.checkCharacter("h"));
console.log(guessWord.wordString());
*/
console.log("Word Guess Game Starting...".cyan);
console.log("Type exit then press Enter to end the game.".red);
//askQuestion();
function askQuestion() {
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter!".magenta.italic.bold,
            name: "letter",
            validate: function (res) {
                if (res.match(/[a-z|A-Z]/i) && res.length == 1) {
                    return true;
                } else if (res.toLowerCase()==="exit") {
                    process.exit();
                } else {
                    return "Please enter a letter.".red;
                }
            }

        }
    ]).then(function (inquirerResponse) {
        if (!lettersGuessed.includes(inquirerResponse.letter)) {
            lettersGuessed.push(inquirerResponse.letter);
            checkCharacter(inquirerResponse.letter);
        } else {
            console.log("You already used this letter.");
        }
        if (remainingGuess > 0) playGame();
        //add code to play again once it has been guess and there are still words in array
        else {
            console.log("Sorry! Next word...");
            canPlay = true;
            remainingGuess = 10;
            lettersGuessed = [];
            playGame();
        }
    });
}

function getRandomWord() {
    var idx = Math.floor(Math.random() * words.length);
    var theWord = words[idx].trim().replace(/[^a-zA-Z ]/g, "");
    return theWord;
}

function playGame() {
    if (canPlay) {
        guessWord = getRandomWord();
        canPlay = false;
        guessWord = new word(guessWord);
    }
    if (!guessWord.isWordGuessed()) {
        console.log(guessWord.wordString());
        askQuestion();
    } else {
        console.log("You got it right! Next word...");
        //add code to play again once it has been guess and there are still words in array
        remainingGuess = 10;
        canPlay = true;
        lettersGuessed = [];
        playGame();
    }
}

function checkCharacter(char) {
    var isTrue = guessWord.checkCharacter(char);
    if (!isTrue) {remainingGuess--;
    console.log(`You have ${remainingGuess} remaining guess.`);
    }
    //console.log(guessWord);
}
playGame();
//track users remaining guess