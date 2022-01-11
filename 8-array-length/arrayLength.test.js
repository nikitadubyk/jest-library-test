const pushToArray = require('./arrayLength');

describe('Test array:', () => {
    test('expect 2 items in array', () => {
        expect(pushToArray()).toHaveLength(2);
    });
});
