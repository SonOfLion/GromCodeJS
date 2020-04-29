function getSum(a, b) {
    let sum = 0;
    sum = a + b;

    for (let i = a; i <= b; i++) {
        sum += i;
        if (sum % 2 === 0) {
            return sum;
        }
    }
}