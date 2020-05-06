function increaseEventEl(num, delta) {
    if (!Array.isArray(num)) return null;

    return num.map(num => {
        if (num % 2 === 0)
            return num = num + delta;
        return num;
    });
}

let numbers = (([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEventEl(numbers));