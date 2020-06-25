const baseUrl = 'https://5ef46efeac6d1e00168ca095.mockapi.io/api/v1/users';

/* getUsersList code here */
export const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
};

// getUsersList()
//     .then(response => console.log(response));

/* getUserById code here */
export const getUserById = (userId) => {
    return fetch(`${baseUrl}/${userId}`)
        .then(response => response.json())
};


/* createUser code here */
export const createUser = (usersObject) => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(usersObject)
    });
};

// const newUser = {
//     firstName: 'Leonid',
//     lastName: 'Pistryi',
//     age: 29
// };

// createUser(newUser)
//     .then(() => console.log(`User ${newUser} was created`));

/* updateUser code here */
export const updateUser = (userId, updateUser) => {
    return fetch(`${baseUrl}/${userId}`), {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(updateUser)
    }
};
/* deleteUser code here */
export const deleteUser = (userId) => {
    return fetch(`${baseUrl}/${userId}`), {
        method: 'DELETE',
    }
};