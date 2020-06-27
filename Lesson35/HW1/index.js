export const parseUser = (jSon) => {
    try {
        return JSON.parse(jSon);
    } catch (err) {
        console.error('Error');
        return null;
    }
};

// console.log(parseUser('abc'));