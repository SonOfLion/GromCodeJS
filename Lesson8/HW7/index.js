let obj1 = { name: 'Tom', age: 17, student: false };
let obj2 = { name: 'Thomas', age: 17 };

function compareObjects(obj1, obj2) {

    return obj1.length !== obj2.length;


}

console.log(compareObjects(obj1, obj2));