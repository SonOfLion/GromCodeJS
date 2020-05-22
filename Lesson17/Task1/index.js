export const user = {
    firstName: 'John',
    lastName: 'Doe',

    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
};

user.getFullName();