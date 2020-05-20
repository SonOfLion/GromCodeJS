export function createLogger() {
    const memory = [];

    //input:text//output:undefined;USE OBJECT TYPE!!!
    return {
        warn(text) {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'warn'
            });
        },
        error(text) {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'error'
            });
        },
        log(text) {
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'log',
            });
        },
    },

    function getRecords(type) { //filter and sort for all types;
        if (type === undefined)
            return memory.sort((a, b) => b.dateTime - a.dateTime);
        else
            return memory.filter((el) => el.type === 'type').sort((a, b) => b.dateTime - a.dateTime);
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
// console.log(user.getRecords('error'));
// console.log(user.getRecords('log'));