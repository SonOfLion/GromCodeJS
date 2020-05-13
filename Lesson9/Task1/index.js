//getAdults

// const users = {
//     name: 'Tom',
//     age: 17,
// }

//Object.keys().
//Object.values().
//Object.entries().

//console.table(Object.entries(users));

const users = {
    'Tom': 17,
    'John Doe': 19,
    'Bob': 18,
};

const getAdults = usersObj => {
    const usersArray = Object.entries(usersObj);
    const filteredUsersArray = usersArray
        .filter(users => users[1] >= 18);

    const usersName = filteredUsersArray
        .map(users => users[0]);

    return usersName;
}

console.table(getAdults(users));