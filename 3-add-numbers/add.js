function add(a, b) {
    const incorrect = (isNaN(a) && isNaN(b)) || a === null || b === null;

    if (incorrect) {
        throw new Error('Oops, pass the numbers');
    }

    if (a && b) {
        return a + b;
    } else {
        return function (c) {
            return a + c;
        };
    }
}

module.exports = add;
