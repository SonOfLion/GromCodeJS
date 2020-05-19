export const user = {
    name: 'Tom',
    age: 17,
};

user.hobby = 'football'; /* присвойте объекту свойство hobby со значением 'football' с помощью точки */

const anotherKey = 'married';
user.married = false; /* название свойства хранится в переменной anotherKey. Присвойте объекту такое свойство со значением false */

user['favorite music'] = 'rock'; /* присвойте объекту свойство 'favorite music' со значением 'rock' */

user.address = {}; /* присвойте объекту свойство 'address', которое будет пустым объкетом */

user.address.country = 'Ukraine'; /* присвойте объекту в 'address' свойство 'country', со значением 'Ukraine' */

user.address.building = 17; /* присвойте объекту в 'address' свойство 'building', со значением 17 */

/* выведите в консоль объект user */

console.log(user);