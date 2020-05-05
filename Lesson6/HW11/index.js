let includes = function(arr, n) {
    if (arr.includes(n)) {
        return true;
    } else {
        return false;
    }
}

console.log(includes([1, 2, 3], 6));