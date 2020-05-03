function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let reverseArr = [];

    for (let i = arr.length; i >= 0; i--) {
        reverseArr.push(arr[i]);
    }

    return arr;
}