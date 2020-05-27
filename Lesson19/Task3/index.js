//User
export function User(name, age) {
    this.name = name;
    this.age = age;

    User.prototype.sayHi = function() {
        console.log(`Hi, I am ${this.name} `);
    }

    User.prototype.requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    User.prototype.setAge = function() {
        if (age < 0) return false;
        if (age >= 25) {
            console.log(`New photo request was sent for ${this.name}`);
        }
        return this.age;
    }
}

let user1 = new User('John', 26);
let user2 = new User('Bob', 25);
let user3 = new User('Mattew', -1);

user1.setAge();
user2.setAge();

// console.log(user1.sayHi === user2.sayHi); //Потому что функцию sayHi каждый раз вызываем для каждого отдельного конструктора