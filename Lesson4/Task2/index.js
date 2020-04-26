let m = 10;
let n = 20;
let result = 1;

while (m <= n) {
    if (m % 2 === 1) {
        result *= m;
    }
    m++;
}
console.log('Result: ' + result);
console.log(m, n);