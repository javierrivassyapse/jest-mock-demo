const { greetings, post } = require('./a-module');

const doSomething = async (...nameGreets) => {
    try {
        const greetingsList = nameGreets.map(nameGreet => greetings(nameGreet))
        const responses = greetingsList.map(greetings => post(greetings))
        return Promise.all(responses);
    } catch (err) {
        return Promise.reject(err)
    }
}

module.exports.doSomething = doSomething
