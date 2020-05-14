const multiRound = (num) => [Math.round(num * 100) / 100,
    Math.floor(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    num.toFixed(2),
];

console.log(multiRound(17.1));