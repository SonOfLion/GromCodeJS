//getLocalStorageData

// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));

// // localStorage.getItem('name');
// console.log(localStorage.getItem('hobbies', JSON.stringify({ name: 'Tom' })));

const getLocalStorageData = () => {
    return Object.entries(localStorage)
        .reduce((acc, [key, value]) => {
            let newValue;
            try {
                newValue = JSON.parse(value);
            } catch (e) {
                newValue = value;
            }
            return {
                ...acc,
                [key]: newValue,
            };
        }, {})
};