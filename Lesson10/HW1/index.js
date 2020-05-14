//input: arr of numbers;
//output:num;
//Округлить до двух знаков и в меньшую сторону.
//use.reduce( посчитать сумму ).
//Создать вторую переменную где можно округлить полученную сумму массива.


let freeNumbers = [13.233, 17.234];

const getTotalPrice = (arr) => {
    let sum = arr.reduce((count, num) => count + num);
    let roundUp = Math.floor(sum * 100) / 100;

    return roundUp;
}

console.table(getTotalPrice(freeNumbers));