export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`);
    }
    setAge(value) {
        if (value < 0) return false;
        this.age = value;
        if (value >= 25) {
            this.requestNewPhoto();
        }
        return value;
    }

    static createEmpty() {
        return new User('', null);
    }
}

const user1 = new User('Leonid Pistryi');

console.log(user1);