function cloneArr(arr) {
    if (!Array.isArray(arr)) return null;

    return arr.slice([...arr]);
}

let numbers = [1, 2, 3, 4, 5];
console.log(cloneArr(numbers));