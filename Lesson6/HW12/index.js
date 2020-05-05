function removeDuplicates(array) {
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice;
            }
        }
    }
    return array;
}