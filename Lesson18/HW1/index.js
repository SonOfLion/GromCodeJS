'use strict';

//input:func;
//output:func;

//Algo
//func saveCalls (func) => return func name"withMemory"++
//saveCalls must create array of calls push to arguments ++
export function saveCalls(func) { //1 create func (func)++
    withMemory.calls = []; //3 Create empty array++

    function withMemory() {
        withMemory.calls.push([...arguments]) //пушить все вызовы функции
        return func.call(this); //вызвать функци (func) и сохранить контекст
    }
    return withMemory; //2 return func++
}

function test(a, b) {
    return Math.sqrt(a * a + b * b);
}

const testWithMemory = saveCalls(test);

testWithMemory(4, 2);
testWithMemory(9, 1);

console.log(testWithMemory.calls);