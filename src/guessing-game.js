class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.res = undefined;
    }

    setRange(min, max) {
        if (min > max) {
            throw new Error("Wrong range!");
        }

        this.min = min;
        this.max = max;
    }

    guess() {
        this.res = Math.round((this.max + this.min) / 2);

        return this.res;
    }

    lower() {
        if (this.min < this.max) {
            this.max = this.res;
        }
    }

    greater() {
        if (this.min < this.max) {
            this.min = this.res;
        }
    }
}

module.exports = GuessingGame;
