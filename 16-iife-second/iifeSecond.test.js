function foo(callback) {
    try {
        var foo = 'Hello';
        (function () {
            var bar = ' World';
            callback(foo, bar);
        })();
        callback(foo, bar);
    } catch (error) {
        throw new Error('the globally bar was not found');
    }
}

test('the function throws an error because no bar was found globally', () => {
    const callback = (x, y) => {
        return [x, y];
    };
    const fooTest = () => foo(callback);

    expect(fooTest).toThrowError('the globally bar was not found');
});
