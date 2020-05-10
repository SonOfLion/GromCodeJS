let obj1 = { name: 'Tom', age: 17 };
let obj2 = { name: 'Tom', age: 17 };

function compareObjects(obj1, obj2) {
    var keysFirstObj = Object.keys(obj1);
    var keysSecondObject = Object.keys(obj2);

    if (keysFirstObj.length !== keysSecondObject.length) {
        return false;
    } else if (keysFirstObj.length === keysSecondObject.length) {
        return true;
    }
}
console.log(compareObjects(obj1, obj2));