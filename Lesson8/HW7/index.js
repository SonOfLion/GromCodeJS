let obj1 = { name: 'Tom', age: 19 };
let obj2 = { name: 'Tom', age: 17 };

function compareObjects(obj1, obj2) {
    return obj1.length !== obj2.length;

    Object.keys(obj1, obj2).forEach(elements => console.log(elements));
}

console.log(compareObjects(obj1, obj2));