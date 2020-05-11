let obj1 = { name: 'Tom', age: 17 };
let obj2 = { name: 'Tomas', age: 39 };
//Сравнить два обьекта.
//Метод length подходит только для ключей, ибо можно измерить длину ключа;
//Нужно перебрать значения обьектов циклом.
function compareObjects(obj1, obj2) {
    let firstObj = Object.keys(obj1);
    let secondObj = Object.keys(obj2);

    if (firstObj.length !== secondObj.length) return true;

    for (let i of firstObj) {
        return (obj1[i] === obj2[i]);
    }
}

console.log(compareObjects(obj1, obj2));