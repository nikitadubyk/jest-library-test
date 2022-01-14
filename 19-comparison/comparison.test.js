function foo1() {
    return {
        bar: 'hello',
    };
}

function foo2() {
    return {
        bar: 'hello',
    };
}

describe('Testing two function:', () => {
    test('the result is expected to be the same', () => {
        expect(foo1()).toEqual(foo2());
    });
});
