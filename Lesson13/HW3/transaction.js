export const transaction = {
    currency: 'USD',
    'value': 170,
    operation: 'sale',
    agent: {
        country: 'Ukraine',
        'company': 'NYSE'
    },
    'operation time': 1584029990001
};

console.log(transaction.currency); /* выведите в консоль значение свойства 'currency' с помощью точки */



console.log(transaction['value']); /* выведите в консоль значение свойства 'value' с помощью квадратных скобок */

const key = 'operation';
console.log(transaction['operation']); /* выведите в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */

console.log(transaction.agent['company']) /* выведите в консоль значение свойства 'company' используя квадратные скобки */

console.log(transaction.agent.country) /* выведите в консоль значение свойства 'country' используя точку */

console.log(transaction['operation time']) /* выведите в консоль значение свойства 'operation time' используя квадратные скобки */