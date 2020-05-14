let numbers = [1, 2, 3, 41.23, 123, null, undefined, Infinity, 'text']

function getParsedIntegers(arr) {
    return arr.map((num) => Number.parseInt(num));
}
console.log(getParsedIntegers(numbers));

function getParsedIntegersV2(arr) {
    return arr.map((num) => parseInt(num));
}
console.log(getParsedIntegersV2(numbers));

function getParsedFloats(arr) {
    return arr.map((num) => Number.parseFloat(num));
}
console.log(getParsedFloats(numbers));

function getParsedFloatsV2(arr) {
    return arr.map((num) => parseFloat(num));
}
console.log(getParsedFloatsV2(numbers));