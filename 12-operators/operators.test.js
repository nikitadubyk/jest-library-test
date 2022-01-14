describe('Test function with logical operators:', () => {
    test('should return hello', () => {
        expect('hello' || 'world').toBe('hello');
    });

    test('should return bar', () => {
        expect('foo' && 'bar').toBe('bar');
    });
});
