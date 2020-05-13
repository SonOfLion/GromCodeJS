//getAdults

// const users = {
//     name: 'Tom',
//     age: 17,
// }

//Object.keys().
//Object.values().
//Object.entries().

//console.table(Object.entries(users));

const users = {
    'Tom': 17,
    'John Doe': 19,
    'Bob': 18,
};

const getAdults = usersObj => Object.entries(usersObj) //Масси массивов
    .filter(users => users[1] >= 18).map(users => users[0]); //Фильтп для массива//и создать массив чтобы вывести всех пользователей.

console.table(getAdults(users));