//input:func;
//output:func;

//Algo
//func saveCalls (func) => return func name"withMemory"
//saveCalls must create array of calls push to arguments

export function saveCalls(func) {
    withMemory.calls = [];

    function withMemory() {
        withMemory.calls.push([arguments])
        return func.calls;
    }
}