const { doSomethingElse, doSomething } = require('./promiseGithub');

describe('Testing promises:', () => {
    test('should return 20', async () => {
        const result = await doSomething().then(function () {
            return doSomethingElse();
        });
        expect(result).toBe(20);
    });

    test('should be undefined', async () => {
        const result = await doSomething().then(function () {
            doSomethingElse();
        });
        expect(result).toBeUndefined();
    });

    test('should return 10', async () => {
        const result = await doSomething().then(doSomethingElse());
        expect(result).toBe(10);
    });

    test('should return 20', () => {
        return expect(doSomething().then(doSomethingElse)).resolves.toBe(20);
    });
});
