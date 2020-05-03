let numbers = [10, 15, 20, 25, 30];

function swap(arr) {
    let [first, middleOne, middleTwo, middleThree, last] = arr;

    return [last, middleOne, middleTwo, middleThree, first];
}

console.log(swap(numbers));