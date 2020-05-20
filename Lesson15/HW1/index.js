//input:undefined;
//ouput:numbers;

export function createCalculator() {
    let memory = 0;

    const add = (num) => memory += num;
    const decrease = (num) => memory -= num;
    const reset = () => memory = 0;
    const getMemo = () => memory;

    return {
        add,
        decrease,
        reset,
        getMemo,
    };
}

const calc = createCalculator();

calc.add(2 + 2);

console.log(calc.getMemo());