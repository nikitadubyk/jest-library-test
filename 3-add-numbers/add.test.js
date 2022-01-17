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

    test('expect the same values should be returned when the function is called differently', () => {
        expect(add(2)(5)).toBe(7);
        expect(add(2, 5)).toBe(7);

        expect(add(10, 2)).toBe(12);
        expect(add(10)(2)).toBe(12);
    });

    test('test with transmission of negative values', () => {
        expect(add(-10)(-20)).toBe(-30);
        expect(add(-1, -22)).toBe(-23);
    });

    test('tests using the maximum value', () => {
        expect(add(Number.MAX_VALUE, 1)).toBeGreaterThan(1);
        expect(add(3, Number.MAX_VALUE)).toBeGreaterThan(3);
    });

    test('tests with incorrect data types', () => {
        const addNull = () => add(null)(0);
        const addNothing = () => add()();
        const addNaN = () => add(NaN)(5);
        const addWithUndefined = () => add(NaN)(add(2, undefined));
        const addArray = () => add([1, 2])([3, 4]);
        const addString = () => add('1')('2');
        const addEmptyArray = () => add([])([]);

        expect(addNull).toThrow();
        expect(addNothing).toThrow();
        expect(addNaN).toThrowError('Oops, pass the numbers');
        expect(addWithUndefined).toThrowError('Oops, pass the numbers');
        expect(addArray).toThrowError('Oops, pass the numbers');
        expect(addString).toThrowError('Oops, pass the numbers');
        expect(addEmptyArray).toThrowError('Oops, pass the numbers');
    });
});
