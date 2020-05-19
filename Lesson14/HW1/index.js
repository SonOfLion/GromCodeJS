export let memory = 0;
export default memory;

export function add(num) {
    memory += num;
    return memory;
}
console.log(memory);

export function decrease(num) {
    memory -= num;
    return memory;
}
console.log(memory);

export function reset() {
    memory = 0;
    return memory;
}
console.log(memory);

export function getMemo() {
    return memory;
}