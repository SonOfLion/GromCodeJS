let number = 0.12;

const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Number(Math.PI.toFixed(2)),
];

console.log(multiRound(number));