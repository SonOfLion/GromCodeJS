//inpit:num;
//output:arr;

function createArrayOfFunctions(num) {
    if (typeof num !== 'number') return null;
    if (num === undefined) return result;

    let emptyArr = [];

    for (let i = 0; i < emptyArr.length; i++) {
        emptyArr[i] = function() {
            return i;
        }
    }
    return emptyArr;
}