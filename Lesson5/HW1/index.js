function getSum(a, b) {
    let sum = 0;

    for (let a = 0; a <= b; a++) {
        sum += a;
        if (sum % 2 === 0) {
            return sum;
        }
    }
}