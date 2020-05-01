const numbers = [11, 22, 44, 55, 66];

function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}

getArrayBounds(numbers);