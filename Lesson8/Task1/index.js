const transformToObject = arr => {
    let obj = {};

    arr.forEach(el => {
        obj[el] = el;
    });

    return obj;
};

const arr = [1, 'text'];
let result = transformToObject(arr);

console.log(result);