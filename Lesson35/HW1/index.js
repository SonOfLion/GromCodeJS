export const parseUser = (jsonStr) => {
    try {
        return JSON.parse(jsonStr)
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