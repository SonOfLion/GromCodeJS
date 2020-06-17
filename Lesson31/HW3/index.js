export const delay = timeOfDelay => new Promise(resolve =>
    setTimeout(() =>
        resolve(), timeOfDelay))

.then(() => console.log('Done'));

// console.log(delay(3000));