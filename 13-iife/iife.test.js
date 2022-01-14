const result = (function () {
    return 'Something is written';
})();

describe('Testing IIFE:', () => {
    test('should return a string', () => {
        expect(result).toBe('Something is written');
    });
});
