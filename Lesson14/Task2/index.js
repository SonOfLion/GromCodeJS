//messendger

let message = 'Hi!';

const createMessenger = () => { //функция для создания сообщений
    let message = 'Just learn it!';
    const sender = 'Gromcode';

    function sendMessage(name) { //создали функции отправки собщений
        console.log(`${name}, ${message}. Your ${sender}`);
    }

    function setMessage(text) { //функция с текстом 
        message = text;
    }

    function setSender(text) {
        message = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    }
};

const messenger1 = createMessenger();

messenger1.sendMessage('Bob');

const messenger2 = createMessenger();

messenger2.sendMessage('Tom'); //к второй переменной применели метод (отправки сообщения).
messenger2.setMessage('Hello'); //применили метод с использованием (сообщения).

messenger1.sendMessage('Ann');