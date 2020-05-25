//Нужно создать таймер с памятью

export const timer = {
    secondsPassed = 0,
    minsPassed = 0,
    counterOfTimer = 0,

    startTimer() { //
        this.counterOfTimer.setInterval(() => {
            this.secondsPassed + 1;
            if (this.secondsPassed === 60) { //Если таймер достигнет === 60 сек, его нужно обнулить до 0 и заного запустить цикл
                this.secondsPassed == 0;
                this.secondsPassed++;
            }
        }, 1000);
    },

    resetTimer() { //Must stoped timer and refresh property of timer
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}