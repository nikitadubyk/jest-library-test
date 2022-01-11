const inedibleFood = require('./throwError');

describe('Testing foods:', () => {
    function eatingWood() {
        inedibleFood('wood');
    }

    test('expect throw error', () => {
        expect(eatingWood).toThrowError(/wood/);
        expect(eatingWood).toThrowError('wood');

        expect(eatingWood).toThrowError(/^Oops, I don't eat wood$/);
    });

    test('expect throw error snapshot', () => {
        expect(eatingWood).toThrowErrorMatchingSnapshot();
    });
});
