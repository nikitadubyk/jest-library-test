const add = require('./add');

describe('Testing function add:', () => {
    test('when passing two arguments', () => {
        expect(add(2, 5)).toBe(7);
        expect(add(5, 11)).toBe(16);
        expect(add(3, 2)).toBeGreaterThan(4);
        expect(add(3, 2)).toBeLessThan(6);
        expect(add(3, 2)).toBeLessThanOrEqual(5);
    });

    test('when calling two functions', () => {
        expect(add(3)(8)).toBe(11);
        expect(add(12)(1)).toBeGreaterThanOrEqual(10);
        expect(add(12)(1)).toBeGreaterThanOrEqual(13);
    });
});
