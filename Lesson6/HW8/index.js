function sortAsc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = array.length - 1; i > 0; i--) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
                count++;
            }
        }
        if (count === 0) {
            break;
        }
    }
    return array;
}

console.log(sortAsc([3, 2, 6, 9]));

function sortDesc(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = array.length - 1; i > 0; i++) {
        let count = 0;
        for (let j = 0; j < i; j++) {
            if (array[j] < array[j + 1]) {
                let swap = array[j];
                array[j] = array[j + 1];
                array[j + 1] = swap;
                count++;
            }
        }
        if (count === 0) {
            break;
        }
    }
    return array;
}

console.log(sortDesc([3, 2, 6, 9]));