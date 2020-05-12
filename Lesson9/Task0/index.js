const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', '34'];

function buildObject(keysList, valuesList) {
    let emptyObj = {};

    keysList.forEach((el, i) => {
        emptyObj[el] = valuesList[i];
        //console.log(el, i, array);
    });
    return emptyObj;
}

console.log(buildObject(keys, values));