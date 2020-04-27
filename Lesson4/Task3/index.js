for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + ' x ' + j + ' = ' + i * j);
    }
}


let result = 0;

while (true) {
    const userInput = prompt('Enter you`re password');
    result += Number(userInput);

}