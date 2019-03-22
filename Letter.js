const Letter = function (letter) {
    this.letter = letter;
    this.isGuessed = false;
    this.getLetter = function () {
        if (this.isGuessed) return this.letter;
        else return "_";
    };
    this.updateLetter = function (varLetter) {
        if (this.letter === " ") {
            this.isGuessed = true;
        } else {
            if (this.letter === varLetter) {
                this.isGuessed = true;
                return true;
            }
        }
        return false;
    }

}

module.exports = Letter;