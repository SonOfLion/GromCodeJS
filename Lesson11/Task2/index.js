//input:arr, logicFalse/True;
//ouput:arr, if True a === b, else false b === a;
//Если True вернуть массив по возрастанию , False Вернуть по убыванию массив.
function sortContacts(arr, logicTrue = true) {
    if (!Array.isArray(arr)) return null;

    if (logicTrue === false)
        return arr.sort((a, b) => b.name.localeCompare(a.name));

    return arr.sort((a, b) => a.name.localeCompare(b.name));
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