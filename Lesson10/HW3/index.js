//input: float, n;
//output:n,float;

const superRound = (flo, n) => [
    Math.floor(flo * Math.pow(10, n)) / Math.pow(10, n),
    Math.round(flo * Math.pow(10, n)) / Math.pow(10, n),
    Math.ceil(flo * Math.pow(10, n)) / Math.pow(10, n),
    Math.trunc(flo * Math.pow(10, n)) / Math.pow(10, n), +flo.toFixed(n)
];

console.log(superRound(4234.23423, 6));