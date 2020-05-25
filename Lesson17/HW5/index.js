export const timer = {
    secondPassed = 0,
    mindPassed = 0,

    startTimer() {
        '${secondPassed}' + 1;
    },

    resetTimer() {
        this.secondPassed = 0;
        this.mindPassed = 0;
    },
}