let m = 10;
let n = 40;
let result = 0;

for (let i = 10; i <= n; i++) {
    result = i;
    if (result % 2 === 0 && result % 4 !== 0) {
        result = m + n;
    } else if (result % 3 === 0) {
        result = m - n;
    } else if (result % 4 === 0) {
        result = m * n;
    } else if (result % 5 === 0) {
        console.log(result);
    }
}