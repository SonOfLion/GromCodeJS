var foo = 1;

export default foo;

function bar() {
    if (!foo) {
        let foo = 10;
    }

    return foo;
}

var foo = bar();

// console.log(foo);