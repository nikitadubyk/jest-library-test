function add(a, b) {
    const incorrect =
        (typeof a !== 'number' && typeof b !== 'number') ||
        (isNaN(a) && isNaN(b));

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
