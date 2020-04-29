function getSum(num1, num2) {
    let sum = 0;


    for (let i = num1; i <= num2; i++) {
        sum += i;
        if (sum % 2 === 0) {
            return sum;
        }
    }
}