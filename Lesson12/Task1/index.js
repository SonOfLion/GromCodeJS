//input:str;
//output:Number(str);
const calc = expression => {
    const [a, operator, b] = expression.split(' ');

    switch (operator) {
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
    return `${expression}  =  ${result}`;
}

console.log(calc('2 * 2'));