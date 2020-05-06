function arrAverage(arr) {
    if (!Array.isArray(arr)) return null;

    return arr.reduce((accumulator, element) => accumulator + element / element)
}

let numbers = [4, 6];
console.log(arrAverage(numbers));