export const user = {
    firstName: 'John',
    lastName: 'Doe',

    getFullName() {
        return `user ${this.firsName} ${this.lastName}`
    },

    setFullName(fullname) {
        let cutOff = fullname.split(' ');
        this.firstName = [0];
        this.lastName = [1];
        return cutOff;
    },
};

console.log(user.setFullName('Leonid Pistryi'));