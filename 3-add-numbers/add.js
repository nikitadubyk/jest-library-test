function add(a, b) {
    if (a && b) {
        return a + b;
    } else {
        return function (c) {
            return a + c;
        };
    }
}

module.exports = add;
