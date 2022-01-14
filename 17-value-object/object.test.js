function returnValue() {
    var foo = { n: 1 };
    var bar = foo;
    return (foo.x = foo = { n: 2 });
}

describe('Testing function returnValue', () => {
    test('expected to return n:2', () => {
        const expectedObject = { n: 2 };
        expect(returnValue()).toEqual(expectedObject);
    });
});
