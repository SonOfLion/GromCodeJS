let clients = ['Ann', 'John', 'User'];
let balances = [1400, 87, -6];

function withdraw(clients, balances, client, amount) {

    if (balances[clients.indexOf(client)] >= amount)

        return (balances[clients.indexOf(client)] = balances[clients.indexOf(client)] - amount);

    return -1;
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6]))