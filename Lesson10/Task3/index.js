const multiRound = (num) => [Math.floor(num * 100) / 100,
    Math.round(num),
    Math.ceil(num),
    Math.trunc(num),
    num.toFixed(2),
];