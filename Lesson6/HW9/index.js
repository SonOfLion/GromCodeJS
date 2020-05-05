let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
    let indexOfArray;

    for (let i = 0; i < clients.lenght; i++) {
        if (clients[i] === client) {
            indexOfArray = i;
        }
    }

    if (balances[indexOfArray] >= amount) {
        return (balances[indexOfArray] = balances[indexOfArray] - amount);
    }
}