const letter = require("./Letter.js");

var Word = function(word) {
    this.word = word;
    this.wordArray = [];
    for (let i=0;i<this.word.length;i++) {
        this.wordArray.push(new letter(this.word[i]));
    }
    this.wordString = function() {
        let theWord = "";
        for (let i=0;i<this.wordArray.length;i++) {
            theWord+=this.wordArray[i].getLetter();
            if (i<=this.wordArray.length-1) theWord+= " ";
        }
        return theWord;
    };
    this.checkCharacter = function(char) {
        let theWord = "";
        let isTrue = false;
        for (let i=0;i<this.wordArray.length;i++) {
            let isTrue1 = this.wordArray[i].updateLetter(char);
            if (isTrue1) isTrue = true;
        }
        if(isTrue) console.log("Correct");
        else console.log("Incorrect");
        return isTrue;
    };
  };

  /*
  const testWord = new Word("the");
  console.log(testWord.wordString());
  console.log(testWord.checkCharacter("c"));
  console.log(testWord.wordString());
  */
  module.exports = Word;