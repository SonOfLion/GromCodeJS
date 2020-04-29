function getPrimes(n) {
    for (let i = 2; i <= n; i++) {
        if (i / i && i % 2 === 1) {
            console.log(i);
        }
    }
}