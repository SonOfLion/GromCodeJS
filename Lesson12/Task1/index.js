//input:str;
//output:Number(str);
const calc = expression => {
    const a = expression.split(' ');

    switch (a[1]) {
        case '+':
            return +a[0] + +a[2];
            break;
        case '-':
            return a[0] - a[2];
            break;
        case '*':
            return a[0] - a[2];
            break;
        case '/':
            return a[0] - a[2];
            break;
    }
    return expression + ' = ' + result;
}

console.log(calc('2 + 2'));