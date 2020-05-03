function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = arr.length; i >= 0; i--) {
        arr.push(arr[i]);
    }

    return arr;
}