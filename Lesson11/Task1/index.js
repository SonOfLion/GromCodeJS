// const text = 'message';

// const message = `
//     The next is ${text.toLocaleUpperCase()},
//     and something else.
// `;

// console.log(message);

//1.Поделить текст на куски и закинуть в массив. 'Abcsdsa',4 => ['Abcs', 'dsa'] => ['Abcs', 'dsa'] =>
//2.Склеить все элементы массива.  => ['Abcs/ndsa'];


//input:text, len;
//output:text,len=10,null;
const splitText = (text, len = 10) => {
    if (typeof text !== 'string') return null;

    const strArr = [];
    let startPosition = 0;

    while (true) {
        let chunk = text.substr(startPosition, len);
        if (chunk.length === 0) {
            break;
        }
        strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
        startPosition += len;
    }
    return strArr.join('\n');
};


console.log(splitText(1));