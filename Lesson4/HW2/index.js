let n = 40;

let result = 0;

for (let m = 10; m < n; m++) {
    result = m, n;
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