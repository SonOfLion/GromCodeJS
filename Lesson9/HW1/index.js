//Создать массив массивов.use Object.entries();
//Вернуть массив пользоватлей.map();
//Для сортировки по возрастанию изать  метод sort((a,b) => a - b);

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

function getCustomersList(users) {
    return Object.entries(users)
        .map(([customer, id]) => ([...customer], id))
        .sort((a, b) => a.age - b.age);
}
console.table(getCustomersList(customers));