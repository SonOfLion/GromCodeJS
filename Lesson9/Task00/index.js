// 1.Перебрать обьекты на ключи.
// 2.Перебрать массив значений на равенство с ключом.
// 3.Если функция не может добавить не одного значения, вернуть пустой объект.



function pickProps(obj, arr) {
    let emptyObj = {};

    for (let keys in obj) {
        for (let el in arr) {
            if (keys === el) {
                emptyObj[keys] = obj[keys];
            }
        }
    }
    return emptyObj;
}

let checkObj = { a: 1, b: 2, c: 3 };
let checkArr = ['a', 'c'];
console.log(pickProps(checkObj, checkArr));