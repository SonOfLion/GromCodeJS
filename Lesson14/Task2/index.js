//messendger

//let message = 'Hi!';

export default function createMessenger() { //функция для создания сообщений
    let message = 'Just learn it!';
    let sender = 'Gromcode';

    function sendMessage(name) { //создали функции отправки собщений
        console.log(`${name}, ${message} Your ${sender}`);
    }

    function setMessage(text) { //функция с текстом 
        message = text;
    }

    function setSender(text) {
        sender = text;
    }

    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

const messenger1 = createMessenger();
const messenger2 = createMessenger();

messenger1.sendMessage('Bob');

messenger2.setMessage('Good job!'); //применили метод с использованием (сообщения).
messenger2.sendMessage('Tom'); //к второй переменной применели метод (отправки сообщения).

messenger2.setSender('Bob');
messenger2.sendMessage('Tom');