//input:word;
//output:drow;!
const reverseString = str => {
    return str.split('').reverse().join('');
}

console.log(reverseString('abc'))