function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let reverseArr = [];

    for (let i = 1; i <= arr.length; i++) {
        reverseArr.push(arr[arr.length - i]);
    }
    return reverseArr;
}

console.log(reverseArray([1, 2, 3]));