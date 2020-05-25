const user = {
    firstName: 'John',
    lastName: 'Doe',

    getFullName() {
        return `user ${this.firstName} ${this.lastName}`
    },

    setFullName(fullname) {
        let cutOff = fullname.split(' ');
        this.firstName = cutOff[0];
        this.lastName = cutOff[1];
    },
};
console.log(user.getFullName());