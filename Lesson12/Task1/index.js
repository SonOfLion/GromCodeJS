//input:str;
//output:Number(str);

const calc = expression => {
    const [a, operator, b] = expression.split(' ');
    let result;

    switch (operator) {
        case '+':
            return Number(a) + Number(b);
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            return a / b;
            break;
    }
    return `${expression}  =  ${result}`;
}

console.log(calc('2 * 2'));