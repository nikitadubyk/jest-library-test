const foo = require('./boolean');

describe('Testing function:', () => {
    test('expect to be false', () => {
        expect(typeof a !== 'undefined').toBeFalsy();
        expect(typeof a !== 'undefined').toBe(false);
        expect(typeof a !== 'undefined').not.toBe(true);
        expect(typeof a !== 'undefined').not.toBeTruthy();
    });

    test('expect to be true', () => {
        expect(typeof b !== 'undefined').toBeTruthy();
        expect(typeof b !== 'undefined').toBe(true);
    });
});
