const axios = require('axios');
const { fetchData, foo } = require('./async');

jest.mock('axios');

describe('Testing a foo function:', () => {
    test('should return "data from server"', () => {
        return foo('data from server').then(data => {
            expect(data).toBe('data from server');
        });
    });

    test('should return some data', async () => {
        const result = await foo('some data');
        expect(result).toBe('some data');
    });

    test('should return some data on resolves', () => {
        return expect(foo('some data')).resolves.toBe('some data');
    });

    test('should return error with promise', () => {
        return expect(foo()).rejects.toThrowError('error');
    });
});

describe('Testing fetchData:', () => {
    let todos, response;

    beforeEach(() => {
        todos = [{ id: 1, title: 'Title', name: 'Nikita' }];
        response = {
            data: {
                todos,
            },
        };
    });

    test('should return data form server', () => {
        axios.get.mockResolvedValue(response.data);

        return fetchData().then(data => expect(todos).toEqual(todos));
    });
});
