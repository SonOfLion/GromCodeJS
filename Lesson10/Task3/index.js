const multiRound = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 10) / 100,
    Math.ceil(num * 10) / 100,
    Math.trunc(num * 10) / 100,
    Number(Math.PI.toFixed(2)),
];