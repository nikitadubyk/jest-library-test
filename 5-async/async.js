const axios = require('axios');

async function fetchData() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos'
    );
    return response.data;
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
