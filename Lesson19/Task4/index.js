'use strict';

export default user;

const user = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}` //return fullname of user;++
    },

    set fullName(property) { //split username by property ++
        const [firstName, lastName] = property.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }, //return undefined;++
};

console.log(user.fullName);

user.fullName = 'Leonid Pistryi';

console.log(user.fullName);