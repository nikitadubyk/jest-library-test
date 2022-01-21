function add(a, b) {
    if (typeof a === 'number' && !isNaN(a)) {
        if (typeof b === 'undefined') {
            return function (c) {
                if (typeof c === 'number' && !isNaN(c)) {
                    return a + c;
                } else {
                    throw new Error('Oops, pass the numbers');
                }
            };
        } else if (typeof b === 'number' && !isNaN(b)) {
            return a + b;
        }
    }

    throw new Error('Oops, pass the numbers');
}

module.exports = add;
