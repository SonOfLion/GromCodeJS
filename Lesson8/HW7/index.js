let obj1 = { name: 'Tom', age: 17 };
let obj2 = { name: 'Bob', age: 17 };
let obj3 = { name: 'Bob', age: 17, student: false };
let obj4 = { name: 'Tom', age: 17 };
//Сравнить два обьекта.
//Метод length подходит только для ключей, ибо можно измерить длину ключа;
//Нужно перебрать значения обьектов циклом.
function compareObjects(obj1, obj2) {

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
        return true;
    }
    if (obj1.length === obj2.length) return true;
    return false;
}

console.log(compareObjects(obj1, obj2));