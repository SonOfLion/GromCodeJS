let obj1 = { name: 'Tom', age: 17, student: false };
let obj2 = { name: 'Tom', age: 17, student: false };

function compareObjects(obj1, obj2) {
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);

    if (arr1.length !== arr2.length) return false;


    return arr1.reduce((acc, keys) =>
        obj1[keys] === obj2[keys], true);
}

console.log(compareObjects(obj1, obj2));