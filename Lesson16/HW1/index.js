//inpit:num;
//output:arr;

export function createArrayOfFunctions(num) {
    if (typeof num !== 'number') return null;
    if (num === undefined) return emptyArr;

    let emptyArr = [];

    for (let i = 0; i < num.length; i++) {
        emptyArr[i] = function() {
            return i;
        }
    }
    return emptyArr;
}