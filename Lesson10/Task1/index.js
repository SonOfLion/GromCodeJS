const numbers = [15, 9.2, null, undefined, '19', Infinity, 12319203.13123];

function getFiniteNumbers(arr) {
    return arr.filter((num) => Number.isFinite(num));
}

console.log(getFiniteNumbers(numbers));

function getFiniteNumbersV2(arr) {
    return arr.filter((num) => isFinite(num));
}

console.log(getFiniteNumbersV2(numbers));

function getNan(arr) {
    return arr.filter((num) => Number.isNaN(num));
}

console.log(getNan(numbers));

function getNanV2(arr) {
    return arr.filter((num) => isNaN(arr));
}

console.log(getNanV2(numbers));

function getIntegers(arr) {
    return arr.filter((num) => Number.isInteger(num));
}

console.log(getIntegers(numbers));