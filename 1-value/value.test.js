const value = require('./value');

describe('Returns the value:', () => {
    test('expected to be a string', () => {
        expect(value()).toBe('1020');
    });

    test('expected to be "10" in result', () => {
        expect(value()).toMatch(/10/);
    });

    test('expected to be "020" in result', () => {
        expect(value()).toMatch(/020/);
    });
});
