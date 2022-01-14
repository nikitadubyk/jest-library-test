const numberComparison = require('./numberComparison');

describe('Floating point comparison:', () => {
    test('expect to be false', () => {
        expect(numberComparison()).toBeFalsy();
        expect(numberComparison()).toBe(false);
        expect(numberComparison()).not.toBe(true);
    });

    test('expect to be approximate equality 0.3', () => {
        expect(0.1 + 0.2).toBeCloseTo(0.3);
    });
});
