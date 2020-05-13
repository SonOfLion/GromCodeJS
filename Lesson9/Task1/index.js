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
    .filter(users => users[1] >= 18).map(users => users[0]); //Фильтр для массива//и создать массив чтобы вывести всех пользователей.
//Или же заюзать Object.values(usersObj); результат будет тот же.
console.table(getAdults(users));