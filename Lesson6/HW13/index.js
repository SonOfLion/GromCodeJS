function uniqueCount(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; i++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr.length;
}