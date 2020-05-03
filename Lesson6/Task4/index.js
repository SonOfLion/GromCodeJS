let numbers = [10, 15, 20, 25];

function swap(arr) {
    let [first, middleOne, middleTwo, last] = arr;

    return [last, middleOne, middleTwo, first];
}

console.log(swap(numbers));