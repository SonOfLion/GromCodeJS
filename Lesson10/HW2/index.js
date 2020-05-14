//input:length, float,float;
//output: arr,length, int,int;
//Eсли в промежутке нет целых чисел вернуть null.
//Нужно вернуть массив целых чисел причем правильной длины.
//Создать пустой массив, создать цикл.
//Элементы массива округлить вниз.


function getRandomNumbers(len, start, end) {
    const intNum = end - start < 1 && Math.ceil(end) === Math.ceil(start); //проверка на четность
    if (intNum) {
        return null;
    }

    let emptyArr = []; //Пустой массив

    for (let i = 0; i < len; i++) { //Цикл
        emptyArr[i] = Math.floor(Math.random() * (Math.floor(end) - Math.ceil(start))) + Math.ceil(start); //генератор чисел
    };
    return emptyArr;
}
console.log(getRandomNumbers(12.2, 5.3, 3.4, 4.5));