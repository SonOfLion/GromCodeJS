export const getSquaredArray = arr => {
    return arr.map(num => num * num);
};

export const getOddNumbers = arr => {
    return arr.filter(num => (num % 2 === 1));
};

export default (a, b) => a + b;