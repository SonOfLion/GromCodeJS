//1.Создать массив массивов.use Object.entries();
//2.Вернуть массив пользоватлей.map();
//2!.Вернуть всех пользователей с id. 
//3Для сортировки по возрастанию юзать  метод sort((a,b) => a - b);

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    }
};
const getCustomersList = users =>
    Object.entries(users) //1,2.Массив массивов.
    .map(([id]) => ({ id })) //Вернуть id пользователей!
    .sort((a, b) => a.age - b.age) //Отсортировать по возрастанию пользователей.

console.table(getCustomersList(customers));