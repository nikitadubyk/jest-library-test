const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        return response.data;
    } catch (error) {
        if (error.response) {
            console.log(`Error response: ${error.response}, ${error.status}`);
        } else if (error.request) {
            console.log(`Error request: ${error.request}`);
        } else {
            console.log(`Error: ${error.message}`);
        }
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
