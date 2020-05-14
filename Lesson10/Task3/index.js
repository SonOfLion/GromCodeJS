let number = [12.123];

const multiRound = num => [Math.floor(num),
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num), +num.toFixed(2),
];

console.log(multiRound(number))