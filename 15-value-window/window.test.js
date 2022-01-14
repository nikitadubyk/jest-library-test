function whatsValueWindow() {
    let wind;
    return (wind = wind || (wind = 'bar'));
}

describe('Testing function:', () => {
    test('expected to return bar', () => {
        expect(whatsValueWindow()).toBe('bar');
    });
});
