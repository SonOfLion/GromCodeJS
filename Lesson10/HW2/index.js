//input:length, float,float;
//output: arr,length, float,float;
//Eсли в промежутке нет целых чисел вернуть null.
//Нужно вернуть массив целых чисел причем правильной длины.
//


function getRandomNumbers(len, start, end) {
    const intNum = end - start < 1 && Math.ceil(end) === Math.ceil(start);
    if (intNum) {
        return null;
    }
}