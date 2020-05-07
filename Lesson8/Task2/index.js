const user = {
    name: 'Tom',
    age: 17,
};

const concatProps = obj => {
    let arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
    }

    return arr;
};
// user = ['Tom', age:17];


console.log(concatProps(user));