//Нужно создать таймер с памятью

export const timer = {
    secondPassed = 0,
    mindPassed = 0,
    counterOfTimer = 0,

    startTimer() { //
        this.counterOfTimer.setInterval(() => {
            this.secondPassed + 1;
            if (this.secondPassed === 60) { //Если таймер достигнет === 60 сек, его нужно обнулить до 0 и заного запустить цикл
                this.secondPassed === 0;
                this.secondPassed++;
            }
        }, 1000);
    },

    resetTimer() { //Must stoped timer and refresh property of timer
        this.secondPassed = 0;
        this.mindPassed = 0;
    },
}