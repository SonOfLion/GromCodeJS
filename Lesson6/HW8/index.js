function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (var i = 0, endI = array.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j + 1]) {
                var swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
            }
        }
    }
    return array;
}

console.log(sortAsc([3, 2, 6, 9]));

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }
}