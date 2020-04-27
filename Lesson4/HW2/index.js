let m = 10;
let result = 0;

for (let n = 50; n > m; n++) {
    if (n, m % 2 === 0 && n, m % 4 !== 0) {
        result = n + m;
    } else if (n, m % 3 === 0) {
        result = n - m;
    } else if (n, m % 4 === 0) {
        result = n * m;
    } else if (n, m % 5 === 0) {
        console.log(result);
    }
}