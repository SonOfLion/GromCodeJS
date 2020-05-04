function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let [...cloneArray] = arr;

    return cloneArray;
}

console.log(cloneArr([1, 2, 3]));