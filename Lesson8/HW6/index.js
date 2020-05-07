let obj1 = { name: 'Bob', age: 17, student: false };
let obj2 = { name: 'Tom', age: 17, student: false };

function mergeObjectsV1(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

console.log(mergeObjectsV1(obj1, obj2));

function mergeObjectsV2(obj1, obj2) {
    return Object.assign(obj2, obj1);
}

console.log(mergeObjectsV2(obj1, obj2));

function mergeObjectsV3(obj1, obj2) {
    return Object.assign({...obj2 }, {...obj1 });
}

console.log(mergeObjectsV3(obj1, obj2));
console.log(obj1);
console.log(obj2);

function mergeObjectsV4(obj1, obj2) {
    return Object.assign({...obj2 }, {...obj1 });
}

console.log(mergeObjectsV4(obj1, obj2));