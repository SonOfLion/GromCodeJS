function getPrimes(num) {

    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            console.log('не простое число')
        }
        console.log(i);
    }
}