let memory = 0;
memory;

function add(num) {
    memory += num;
    return memory;
}
console.log(memory);

function decrease(num) {
    memory -= num;
    return memory;
}
console.log(memory);

function reset() {
    memory = 0;
    return memory;
}
console.log(memory);

function getMemo() {
    return memory;
}