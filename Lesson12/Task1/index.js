//input:str;
//output:Number(str);
const calc = expression => {
    const a = expression.split(' ');

    switch (a[1]) {
        case '+':
            return Number(a) + Number(b);
            break;
        case '-':
            return Number(a) - Number(b);
            break;
        case '*':
            return Number(a) * Number(b);
            break;
        case '/':
            return Number(a) / Number(b);
            break;
    }
    return expression + ' = ' + result;
}

console.log(calc('2 + 2'));