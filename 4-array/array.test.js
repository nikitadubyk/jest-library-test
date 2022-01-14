describe('Testing the array:', () => {
    const arr = ['apple', 'lime', 'avocado', 'banana'];

    test('expect "lime" to be in the array', () => {
        expect(arr).toContain('lime');
    });

    test('matches if the actual array does not contain the expected elements', () => {
        expect(['Nikita', 'Jhon', 'Peter', 'Bob']).toEqual(
            expect.not.arrayContaining(arr)
        );
    });

    test('matches even if received contains additional elements', () => {
        expect(['apple', 'lime', 'avocado', 'banana', 'lemon']).toEqual(
            expect.arrayContaining(arr)
        );
    });

    test('the array is expected to contain 4 objects', () => {
        expect(arr).toHaveLength(4);
    });
});
