async function doSomething() {
    return 10;
}

function doSomethingElse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 200);
    });
}

module.exports = { doSomething, doSomethingElse };
