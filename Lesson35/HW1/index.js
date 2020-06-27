export const parseUser = (jSonStr) => {
    try {
        return JSON.parse(jSonStr);
    } catch (error) {
        return null;
    }
};

// const user = {
//     name: 'Leonid',
//     age: 29,
//     city: 'Odessa'
// };

// console.log(parseUser(user));