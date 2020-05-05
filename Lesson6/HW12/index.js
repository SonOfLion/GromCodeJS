function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}

console.log(removeDuplicates([1, 2, 3, 3, 4]));