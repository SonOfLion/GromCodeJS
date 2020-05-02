function getSpecialNumbers(m, n) {
    let specialNumbers = [];

    for (let i = m; n <= m; i++) {
        if (i % 3 === 0) {
            specialNumbers.pop(i);
        }
    }
    return specialNumbers;
}