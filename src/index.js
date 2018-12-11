const { greetings, post } = require('./a-module');

const doSomething = async (...nameGreets) => {
    const greetingsList = nameGreets.map(nameGreet => greetings(nameGreet))
    const promises = greetingsList.map(greetings => post(greetings))
    return Promise.all(promises);
}

module.exports.doSomething = doSomething
