//counter


export const makeCounter = () => {
    let count = 0;

    return function() {
        return count++;
    }
};
export const counter1 = makeCounter();
export const counter2 = makeCounter();

console.log(counter1()); //0
console.log(counter1()); //1
console.log(counter1()); //2
console.log(counter1()); //3

console.log(counter2()); //0
console.log(counter2()); //1
console.log(counter2()); //2