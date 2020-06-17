//asyncCalculator

const asyncCalculator = numbr => new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value: ${numbr}`)
            resolve(numbr);
        }, 500)
    })
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const result = value * value;
            console.log(`Squared value: ${result}`);
            resolve(result);
        }, 500)
    }))
    .then(value =>
        new Promise((resolve) => {
            const result = value * 2;
            console.log(`Doubled value: ${result}`);
            return value;
        }));


// asyncCalculator(4);

export { asyncCalculator };