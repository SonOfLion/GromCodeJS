//input:arr, logicFalse/True;
//ouput:arr, if True a === b, else false b === a;

function sortContacts(arr, logicTrue = true) {
    if (!Array.isArray(arr)) return null;

    let result = arr.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    if (logicTrue === false) {
        sort((a, b) => {
            return b.name.localeCompare(a.name);
        });
    }

    return result;
}

const contacts = [{
        name: 'Tom',
        phoneNumber: '333-333-4444',
    },
    {
        name: 'Ann',
        phoneNumber: '345-23-13-789',
    },
    {
        name: 'Tom',
        phoneNumber: '333-333-5555',
    },
    {
        name: 'Tom',
        phoneNumber: '989-232-434',
    },
];

console.log(sortContacts(contacts));