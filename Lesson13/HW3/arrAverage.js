export function arrAverage(arr) {
    if (!Array.isArray(arr)) return null;

    return arr.reduce((accumulator, element) => accumulator + element) / arr.length;
}

let numbers = [2, 5, 6, 3];
console.log(arrAverage(numbers));