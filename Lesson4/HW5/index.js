let sum = 0;
let counter = true;

for (let i = 0; i <= 1000; i++) {
    sum = i / 1234 + sum % 2 === 0;
}
console.log(sum);