let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {
    let indexOfArray = 0;
    for (let i = 0; i < clients.lenght; i++) {
        if (clients[i] === client) {
            indexOfArray = i;
        }
    }

    if (balances[indexOfArray] >= amount) {
        return (balances[indexOfArray] = balances[indexOfArray] - amount);
    } else {
        return -1;
    }
}