function compareSums(a, b, c, d) {

    function sumOne()

    { return a + b; }

    function sumTwo()

    { return c + d; }

    if (sumOne() > sumTwo()) {
        return true;
    } else {
        return false;
    }
}

compareSums(1, 2, 1, 1);