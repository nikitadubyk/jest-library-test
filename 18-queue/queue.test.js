const queue = callback => {
    callback('one');
    setTimeout(function () {
        callback('two');
    }, 0);
    Promise.resolve().then(function () {
        callback('three');
    });
    callback('four');
};

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('callback with value', async () => {
    const call = jest.fn();
    queue(call);

    await expect(call).toHaveBeenNthCalledWith(1, 'one');
    await expect(call).toHaveBeenNthCalledWith(2, 'four');
    await expect(call).toHaveBeenNthCalledWith(3, 'three');

    jest.runAllTimers();
    expect(call).toHaveBeenCalledTimes(4);
});
