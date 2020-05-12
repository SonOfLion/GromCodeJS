// 1.Перебрать обьекты на ключи.
// 2.Перебрать массви на равенство с ключом.
// 3.Если 


function pickProps(obj, arr) {
    let emptyObj = {};

    for (let keys in obj) {
        for (let el in arr) {
            if (keys === el) {
                emptyObj = {};
            }
        }
    }
    return emptyObj;
}
let checkObj = { a: 1, b: 2, c: 3 };
let checkArr = ['a', 'c'];
console.log(pickProps(checkObj, checkArr));