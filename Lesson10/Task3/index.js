let number = [12.13123, 12313, -123];

const multiRound = (num) => [Math.round(num),
    Math.floor(num),
    Math.ceil(num),
    Math.trunc(num),
    num.toFixed(),
];

console.log(multiRound(number));