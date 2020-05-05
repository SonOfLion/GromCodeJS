function getSubArray(arr, n) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(getSubArray([1, 2, 3, 4], 2));