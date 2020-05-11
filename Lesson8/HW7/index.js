let obj1 = { name: 'Tom', age: 17 };
let obj2 = { name: 'Bob', age: 17 };
let obj3 = { name: 'Bob', age: 17, student: false };
let obj4 = { name: 'Tom', age: 17 };
//Сравнить два обьекта.
//Метод length подходит только для ключей, ибо можно измерить длину ключа;
//Нужно перебрать значения обьектов циклом.
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    return !keys1.some(key => obj1[key] !== obj2[key]);
}

console.log(compareObjects(obj1, obj2));