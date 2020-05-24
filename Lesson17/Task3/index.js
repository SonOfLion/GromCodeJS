//defer (func,ms) => Function;

export function defer(func, ms) {
    return function() {
        setTimeout(() => func(...arguments), ms);
    }
}

export const user = {
    name: 'Tom',
    sayHi() {
        console.log(`Hi, I'm ${this.name}!`);
    }
};

// const deferredHi = defer(user.sayHi.bind(user), 1000);

// deferredHi();