//bind-метод возвращает функцию
//call-принимает обьект который будет являтся вызовом для функции //func.call({name:'Tom'});

export const callbackPrompt = {
    message: 'Tell me youre number',

    showPrompt() {
        // console.log();
        const phoneNumber = prompt(this.message);
        console.log(phoneNumber);
    },
    showDeferredPrompt(ms) {
        // console.log(this);
        setTimeout(this.showPrompt.bind(this), ms);
    }
};

// callbackPrompt.showDeferredPrompt(1000);