//User
export function User(name, age) {
    this.name = name;
    this.age = age;

    User.prototype.sayHi = function() {
        console.log(`Hi, I am ${this.name}`);
    }

    User.prototype.requestNewPhoto = function() {
        console.log(`New photo request was sent for ${this.name}`);
    }

    User.prototype.setAge = function(newAge) {
        if (age < 0) return false;
        this.age = newAge;
        if (newAge >= 25) {
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
user3.setAge();

user2.sayHi();
user1.sayHi();

// console.log(user1.sayHi === user2.sayHi); //Потому что функцию sayHi каждый раз вызываем для каждого отдельного конструктора