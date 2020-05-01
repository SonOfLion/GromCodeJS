function findDivCount(a, b, n) {
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    if (sum % 2 === 0 && sum === n) {
        return sum;
    } else {
        return 0;
    }
}

findDivCount(1, 2, 3);