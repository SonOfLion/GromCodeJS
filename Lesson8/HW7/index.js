let obj1 = { name: 'Tom', age: 17 };
let obj2 = { name: 'Tom', age: 17 };
//Сравнить два обьекта.
//Метод length подходит только для ключей, ибо можно измерить длину ключа;
//Нужно перебрать значения обьектов циклом.
function compareObjects(obj1, obj2) {
    obj1 === obj2;
}

console.log(compareObjects(obj1, obj2));