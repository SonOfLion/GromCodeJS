/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise(resolve => {
    setTimeout(() => {
        resolve({ name: 'Tom', age: 17 });
    }, 1000);
});

/*
 * Выведите в консоль переменную userDataPromise
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise?
 */

console.log(userDataPromise);
// console.log(typeof(userDataPromise)); Object

/*
 * Выведите в консоль переменную userData в обработчике промиса
 * Ответьте себе на вопрос, что находится в переменной userData?
 */
userDataPromise
    .then(function onSuccess(userData) {
        console.log(userData); //fulfilled операция завершена успешна
    });

/*
 * подпишитесь на успешное выполнение промиса userDataPromise
 * используйте метод .then
 * в обработчике промиса (ф-ция внутри .then() ) выведите в консоль строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достаньте с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise
    .then(function onSuccess(userData) {
        const { name, age } = userData;
        console.log(`My name is ${name}. I am ${age} years old`);
    });