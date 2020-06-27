export const parseUser = (jSonStr) => {
    try {
        return JSON.parse(jSonStr)
    } catch (error) {
        return null;
    }
};
//export ++
//name parseUser ++
//return value of JSON.str if request positive++
//return null if request is negative++

// const user = {
//     name: 'Leonid',
//     age: 29,
//     city: 'Odessa'
// };

// console.log(parseUser(user));