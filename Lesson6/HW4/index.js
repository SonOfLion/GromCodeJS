function increaseEvenEl(arr, delta) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let evenElement = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenElement.push(arr[i] + delta);
        }
    }
    return evenElement;
}

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));