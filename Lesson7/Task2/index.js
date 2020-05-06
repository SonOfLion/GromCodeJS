const sortDesc = numbers =>
    numbers.slice().sort((a, b) => b - a);


const arr = [1, 2, 4, 6, 9, 19, 29, 30, 23];
console.log(sortDesc(arr));