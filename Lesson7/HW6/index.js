function sumArr(arr) {
    if (!Array.isArray(arr)) return null;

    return arr.reduce((accumulator, element) => accumulator + element);
}

let numbers = [1, 2, 3, 4, 5];

console.log(sumArr(numbers));