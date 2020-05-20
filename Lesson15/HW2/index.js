export function createLogger() {
    const memory = [];

    //input:text//output:undefined;
    let warn = (text) => memory.push({ message: text, dateTime: new Date(), type: 'warn' });
    const error = (text) => memory.push({ message: text, dateTime: new Date(), type: 'error' });
    const log = (text) => memory.push({ message: text, dateTime: new Date(), type: 'log' });

    function getRecords(type) { //filter and sort for all types;
        if (type === undefined)
            return memory.sort((a, b) => b - a);
        else
            return memory.filter((el) => el.type === 'type').sort((a, b) => b - a);
    }

    const storage = { //storage for all types;
        memory,
        warn,
        error,
        log,
        getRecords,
    }
    return storage;
}

// let user = createLogger();

// user.warn('Not using!');
// user.error('Error 303!');
// user.log('hello dear user');

// console.log(user.memory);
// console.log(user.getRecords('warn'));