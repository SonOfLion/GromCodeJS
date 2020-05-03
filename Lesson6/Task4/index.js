const numbers = [11, 22, 33, 55, 66];

// const a = numbers[0];
// const b = numbers[1];

// const [a, b] = numbers;

function swap(arr) {
    let [start, ...rest] = arr;

    return [...rest, start];
}
console.log(swap(numbers));