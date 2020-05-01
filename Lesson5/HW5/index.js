function findDivCount(a, b, n) {
    let sum = 0;

    for (let i = a; i <= b; i++) {}
    if (i % n === 0) {
        sum++;
    } else if (sum === 0) {
        return 0;
    }
    return sum;
}

findDivCount(1, 2, 3);