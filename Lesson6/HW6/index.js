function cloneArr(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let [...rest] = arr;

    return rest;
}

console.log(cloneArr([1, 2, 3]));