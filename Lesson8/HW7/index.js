let obj1 = { name: 'Tom', age: 17 };
let obj2 = { name: 'Tom', age: 17 };
//Сравнить два обьекта.
//Метод length подходит только для ключей, ибо можно измерить длину ключа;
//Нужно перебрать значения обьектов циклом.
function compareObjects(obj1, obj2) {
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) return false;
    }
}

console.log(compareObjects(obj1, obj2));