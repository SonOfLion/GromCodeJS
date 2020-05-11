let obj1 = { name: 'Tom', age: 19 };
let obj2 = { name: 'Tom', age: 17 };
//Сравнить два обьекта.
//Метод length не подходит, ибо значение меняется а результат выдает true;
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

}

console.log(compareObjects(obj1, obj2));