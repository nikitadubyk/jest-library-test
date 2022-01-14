// function* fizzBuzz() {
//     for (const i = 1; i < 100; i++) {
//         let output = '';
//         if (i % 3 == 0) output += 'Fizz';

//         if (i % 5 == 0) output += 'Buzz';

//         if (!output) output = i;

//         yield output;
//     }
// }

const fizzBuzz = n => {
    const incorrect = isNaN(n) || n === null || Array.isArray(n);

    if (incorrect) {
        throw new Error('Oops, pass the number');
    }

    let result = [];

    for (let i = n; i > 0; i--) {
        i % 3 === 0 && i % 5 === 0
            ? result.unshift('fizzbuzz')
            : i % 3 === 0
            ? result.unshift('fizz')
            : i % 5 === 0
            ? result.unshift('buzz')
            : result.unshift(i);
    }

    return result;
};

describe('Testing fizzBuzz function', () => {
    test('test for proper function operation', () => {
        expect(fizzBuzz(3)).toEqual([1, 2, 'fizz']);
        expect(fizzBuzz(5)).toEqual([1, 2, 'fizz', 4, 'buzz']);
        expect(fizzBuzz(10)).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
        ]);
        expect(fizzBuzz(15)).toEqual([
            1,
            2,
            'fizz',
            4,
            'buzz',
            'fizz',
            7,
            8,
            'fizz',
            'buzz',
            11,
            'fizz',
            13,
            14,
            'fizzbuzz',
        ]);
    });

    test('tests with incorrect data types', () => {
        const testFizzBuzzWithArray = () => fizzBuzz([]);
        const testFizzBuzzWithNull = () => fizzBuzz(null);
        const testFizzBuzzWithNaN = () => fizzBuzz(NaN);

        expect(testFizzBuzzWithArray).toThrowError('Oops, pass the number');
        expect(testFizzBuzzWithNull).toThrowError('Oops, pass the number');
        expect(testFizzBuzzWithNaN).toThrowError('Oops, pass the number');
    });
});
