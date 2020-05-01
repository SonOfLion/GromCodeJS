function findDivCount(a, b, n) {
    let sum = 0;

    for (let i = a; i <= b; i++) {
        sum += i;
    }
    if (i % n) {
        return sum;
    } else {
        return 0;
    }
}

findDivCount(1, 2, 3);