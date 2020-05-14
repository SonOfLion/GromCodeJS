let number = 12.23451
const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 10) / 100,
    Math.ceil(num * 10) / 100,
    Math.trunc(num * 10) / 100,
    Math.PI.toFixed(2),
];

console.log(multiRound(number));