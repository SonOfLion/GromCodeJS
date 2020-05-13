// const users = {
//     'Tom': 17,
//     'Bob': 100,
// };

const players = {
    'John Doe': 19,
    'Bob': 18,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(players));