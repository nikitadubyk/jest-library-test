const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        return response.data;
    } catch (error) {
        new Error('error');
    }
}

function foo(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {
                resolve(data);
            } else {
                reject(new Error('error'));
            }
        }, 500);
    });
}

module.exports = { fetchData, foo };
