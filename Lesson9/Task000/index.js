//Перебрать ключи и сравнить значением возраста пользователя.
//Вернуть пустой массив для пустого объекта.
const user = ('Tom:19', 'Tom:17');


function getAdults(users) {
    users.filter(user => user < 18);
    console.log(user);
}