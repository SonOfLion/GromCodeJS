//asyncSum(asyncNum1,asyncNum2,...)

// const p = new Promise(resolve => {});

// const resolvePromise = Promise.resolve(17);

// const resolvePromise2 = new Promise(resolve => {
//     resolve(17); //аналог resolvePromise; Same and for reject
// })

const getValueWithDelay = (value, delay) => new Promise(resolve => {
    setTimeout(() => {
        console.log(value);
        resolve(value);
    }, delay);
});

const asyncNum1 = getValueWithDelay(56, 1000);
const asyncNum2 = getValueWithDelay(4, 2000);
const asyncNum3 = getValueWithDelay(10, 3000);

const getSum = numbers =>
    numbers
    .filter(value => !isNaN(value))
    .reduce((acc, num) => acc + num, 0);

export const asyncSum = (...asyncNumbers) => {
    return Promise.all(asyncNumbers)
        .then(numbers => getSum(numbers))
        .catch(() => Promise.reject(new Error('Cant\'t calculate')));
};

asyncSum(asyncNum1, asyncNum2, asyncNum3)
    .then(result => console.log(result));