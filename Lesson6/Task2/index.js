function getSum(arr) {
    let sumOfArr = 0;

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        sumOfArr += arr[i];
    }

    return sumOfArr;
}