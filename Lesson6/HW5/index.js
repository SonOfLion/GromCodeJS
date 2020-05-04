function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let reverseArr = [];

    for (let i = 0; i <= arr.length; i++) {
        reverseArr.push(arr[arr.length - i]);
    }

    return reverseArr;
}