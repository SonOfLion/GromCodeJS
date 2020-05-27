'use strict';



const user = {
    firstName: 'John',
    lastName: 'Doe',

    get fullNameOfUser() {
        return `${this.firstName} ${this.lastName}` //return fullname of user;++
    },

    set fullNameOfUser(property) { //split username by property ++
        const [firstName, lastName] = property.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }, //return undefined;++
};

export default user;

console.log(user.fullNameOfUser);

user.fullNameOfUser = 'Leonid Pistryi';

console.log(user.fullNameOfUser);