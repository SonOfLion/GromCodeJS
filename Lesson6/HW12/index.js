function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j);
            }
        }
    }
    return array;
}

console.log(removeDuplicates([1, 2, 3, 3, 4]));