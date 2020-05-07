const user = {
    name: 'Tom',
    age: 17,
};

/* присвойте объекту свойство hobby со значением 'football' с помощью точки */
user.hobby = 'footbal';

const anotherKey = 'married';
/* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */
user[anotherKey] = false;
/* присвойте объекту свойство 'favorite music' со значением 'rock' */
user['favorite music'] = 'rock';
/* присвойте объекту свойство 'address', которое будет пустым объкетом */
user.adress = {};
/* присвойте объекту в 'address' свойство 'country', со значением 'Ukraine' */
user.adress.country = 'Ukraine';
/* присвойте объекту в 'address' свойство 'building', со значением 17 */
user.adress.building = 17;
/* выведите в консоль объект user */
console.log(user);