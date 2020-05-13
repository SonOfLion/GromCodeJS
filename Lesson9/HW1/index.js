//Создать массив массивов.use Object.entries();
//Вернуть массив пользоватлей.map();
//Для сортировки по возрастанию изать  метод sort((a,b), a - b);

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
const getCustomersList = users => Object.entries(users)
    .map(([customers, id]) => ({...customers }, id))
    .sort((a, b), a.age - b.age);

console.log(getCustomersList(customers));