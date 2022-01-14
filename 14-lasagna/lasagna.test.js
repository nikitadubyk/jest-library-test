const lasagna = () => "i'm a lasagna hog".split('').reverse().join('');

test('Should reverse a string', () => {
    expect(lasagna()).toMatch(/goh angasal a m'i/);
});
