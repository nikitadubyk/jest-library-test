const numberComparison = require('./numberComparison');

describe('Floating point comparison:', () => {
    test('expect to be false', () => {
        expect(numberComparison()).toBeFalsy();
        expect(numberComparison()).toBe(false);
        expect(numberComparison()).not.toBe(true);
    });
});
