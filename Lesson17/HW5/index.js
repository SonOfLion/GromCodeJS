//Нужно создать таймер с памятью

export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    counterOfTimer: 0,

    startTimer() {
        this.counterOfTimer = setInterval(() => {
            this.secondsPassed += 1;
            if (this.secondsPassed === 60) { //Если таймер достигнет === 60 сек, его нужно обнулить до 0 и заного запустить цикл
                this.secondsPassed = 0; //Задать новое значение
                this.minsPassed++; //Шаг цикла
            }
        }, 1000);
    },

    getTime() {
        return `${this.minsPassed}:${this.secondsPassed}`;
        return `${this.minsPassed}:0${this.secondsPassed}`; //Show time
    },

    stopTimer() {
        clearInterval(this.counterOfTimer); //Остановка таймера с сохранением результата
    },

    resetTimer() { //Must stoped timer and refresh property of timer
        this.secondsPassed = 0;
        this.minsPassed = 0;
    },
}

// timer.startTimer();

// setTimeout(() => { stopTimer() }, 1000);

// setTimeout(() => { getTime() }, 2000);