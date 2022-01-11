function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 200);
    });
}

function doSomethingElse() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 200);
    });
}

module.exports = { doSomething, doSomethingElse };
