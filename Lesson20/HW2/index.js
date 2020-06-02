//Algo
//1. create class User++
//2. create constructor with value(id,name,sessionId)++
//3. create close fields!!!++
//4. create class UserRepository++
//5. create constructor fields with array of users++
//6. create metod`s I. getUserNames() need get array with names of users++
//II. getUserIds() need get array with id of users++
//III. getUesrNameById() need get names of users by id++
//7. need return id,names,sessionId++

export class User {
    constructor(id, name, sessionId) {
        this._id = id;
        this._name = name;
        this._sessionId = sessionId;
    }

    get id() { //return id
        return this._id;
    }
    get name() { //return names
        return this._name;
    }
    get sessionId() { //return Id
        return this._sessionId;
    }
}

export class UserRepository {
    constructor(users) {
        this._users = Object.freeze(users);
    };

    //first need get users
    get users() { //++
        return this._users;
    }
    getUserNames() {
        return this._users.map((el) => el._name);
    }
    getUserIds() {
        return this._users.map((el) => el._id)
    }
    getUserNameById(id) {
        return this._users.find((el) => el._id === id)._name;
    }
}

// const user1 = new User(123, 'Leonid', 456);
// console.log(user1);
// const user2 = new User(1313, 'John', 1414);
// console.log(user2);
// let users = [1, 2, 3];
// console.log(users);