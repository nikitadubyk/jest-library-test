function foo(callback) {
    var foo = 'Hello';
    var bar;
    (function () {
        var bar = ' World';
        callback(foo + bar);
    })();
    callback(bar);
}

test('Test the function for scope. It is expected that on the second call we will get undefined', () => {
    const callback = jest.fn();
    foo(callback);

    expect(callback).toHaveBeenNthCalledWith(1, 'Hello World');
    expect(callback).toHaveBeenNthCalledWith(2, undefined);
});
