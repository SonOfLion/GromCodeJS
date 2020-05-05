function uniqueCount(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr.length;
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8]));