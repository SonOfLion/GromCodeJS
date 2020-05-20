function createLogger() {
    const memory = [];

    return {
        warn: text => { //input:text;//ouput:undefined
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'warn',
            });
        },

        error: text => { //input:text;//ouput:undefined
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'error',
            });
        },

        log: text => { //input:text;//ouput:undefined
            memory.push({
                message: text,
                dateTime: new Date(),
                type: 'log',
            });
        },

        getRecords(type) { //сортировка и фильтр,все элементы по убыванию.
            if (type === undefined)
                return memory.sort((a, b) => b.dateTime - a.dateTime);
            else
                return memory.filter((el) => el.type === type).sort((a, b) => b.dateTime - a.dateTime);
        },
    }
}

let user = createLogger();

user.warn('Not using!');
user.error('Error 303!');
user.log('hello dear user');

console.log(user.memory);
console.log(user.getRecords('warn'));
console.log(user.getRecords('error'));
console.log(user.getRecords('log'));