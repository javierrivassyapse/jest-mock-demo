const request = require('request-promise-native');

const greetings = ({name, greetWord = 'Hello'} = {}) => {
    return `${greetWord} ${name}, how are you today?`;
}

const post = async (greetPhrase) => {
    let options = {
        uri: 'http://localhost:5000/ohmymock',
        method: 'POST',
        headers: {
            'Content-type': 'Application/Json'
        },
        body: {
            greet: greetPhrase
        },
        json: true
    };
    try {
        const response = await request(options);
        console.log(`Response from Post: ${JSON.stringify(response)}`)
        return response
    } catch (err) {
        throw new Error(`POST failed: ${err}`)
    }
}

module.exports = {
    greetings: greetings,
    post: post
}

