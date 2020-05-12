//Перебрать ключи и сравнить значением возраста пользователя.
//Вернуть пустой объект для пустого объекта.

function getAdults(user) {
    let emptyArr = {};

    for (let keys in user)
        if (user[keys] >= 18) {
            emptyArr[keys] === user[keys];
        }
    return emptyArr;
}

let users = { Tod: 19, John: 17, Fred: 18 };
let result = getAdults(users);
console.log(result);