//input:word;
//output:drow;!
const reverseString = str => {
    if (typeof str !== 'string') return null;

    return str.split('').reverse().join('');
}

console.log(reverseString('abc'))