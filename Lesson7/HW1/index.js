function squareArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.map((num) => num * num);
}

const numbers = [1, 2, 3, 4, 5];
console.log(squareArray(numbers));