let numbers = [10, 15, 20];

function swap(arr) {
    let [first, middle, last] = arr;

    return [last, middle, first];
}

console.log(swap(numbers));