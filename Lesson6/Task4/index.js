let numbers = [10, 15, 20, 25];

function swap(arr) {
    let [first, midle, last] = arr;

    return [last, midle, first];
}

console.log(swap(numbers));