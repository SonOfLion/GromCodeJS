function getFiniteNumber(arr) {
    return Number.isFinite(arr);
}

console.log(getFiniteNumber('9'));

function getFiniteNumberV2(arr) {
    return arr.filter(num).isFinite(arr);
}

console.log(getFiniteNumberV2);

function getNan(arr) {
    return Number.isNaN(arr);
}

console.log(getFiniteNumberV2);

function getNanV2(arr) {
    return arr.filter(num).isNaN(arr);
}

function getIntegers(arr) {
    return Number.isInteger(arr);
}