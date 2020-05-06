function reverseArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return arr.slice().reverse();
}