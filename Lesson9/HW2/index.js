let rooms = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
    ],
    room2: [
        { name: 'room2 name1' },
        { name: 'room2 name2' },
        { name: 'room2 name3' },
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
    ]
};

//Нужно вернуть значения Object.values();
//Вернуть список жильцов в виде массива.Метод map();
//Вернуть плоским массивом??
const getPeople = obj => Object.values(obj) //1!
    .flat(obj)
    .map((room) => room.name); //2!


console.table(getPeople(rooms));