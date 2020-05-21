//inpit:num;
//output:arr;

export function createArrayOfFunctions(num) {
    let emptyArr = [];

    if (typeof num !== 'number') return null;
    if (num == undefined) return emptyArr;


    for (let i = 0; i < num; i++) {
        emptyArr[i] = function() {
            return i;
        }
    }
    return emptyArr;
}

// console.log(createArrayOfFunctions(9)[5]());