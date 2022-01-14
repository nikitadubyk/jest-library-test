const duplicate = arr => {
    if (Array.isArray(arr)) {
        return [...arr, ...arr];
    } else {
        throw new Error('Oops, pass the array to the function');
    }
};

describe('Testing function duplicate:', () => {
    test('is expected to return an array of repeating values', () => {
        expect(duplicate([1, 2, 3, 4])).toEqual([1, 2, 3, 4, 1, 2, 3, 4]);
        expect(duplicate([10, 20, 30])).toEqual([10, 20, 30, 10, 20, 30]);
        expect(duplicate([-1, 4, -125])).toEqual([-1, 4, -125, -1, 4, -125]);
    });

    test('testing for the transmission of false values', () => {
        const duplicateNaN = () => duplicate(NaN);
        const duplicateUndefined = () => duplicate(undefined);
        const duplicateNull = () => duplicate(null);

        expect(duplicate).toThrowError('Oops, pass the array to the function');
        expect(duplicateNaN).toThrowError(
            'Oops, pass the array to the function'
        );
        expect(duplicateUndefined).toThrowError(
            'Oops, pass the array to the function'
        );
        expect(duplicateNull).toThrowError(
            'Oops, pass the array to the function'
        );
    });
});
