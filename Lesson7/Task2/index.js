const sortDesc = numbers => {
    function compare(a, b) {
        if (a < b) {
            return 1;
        } else {
            return -1;
        }
    }

    numbers.sort(compare);

    return numbers;
}

const arr = [1, 2, 4, 6, 9, 19, 29, 30, 23];
console.log(sortDesc(arr));