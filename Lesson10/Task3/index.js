let number = [12.123673, -12, 23];

const multiRound = num => [Math.floor(num * 100) / 100,
    Math.round(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100), +num.toFixed(2),
];

console.log(multiRound(number))