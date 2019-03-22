const Letter = function (letter) {
    this.letter = letter;
    this.isGuessed = false;
    if (this.letter === " ") {
        this.isGuessed = true;
    }
    this.getLetter = function () {
        if (this.isGuessed) return this.letter;
        else return "_";
    };
    this.updateLetter = function (varLetter) {

        if (this.letter.toLowerCase() === varLetter.toLowerCase()) {
            this.isGuessed = true;
            return true;
        }

        return false;
    }

}

module.exports = Letter;