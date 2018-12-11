const moduleInTest = require('../src/index')

test('Retrieves responses', async () => {
    const result = await moduleInTest.doSomething({name: 'Gemma'}, {name: 'Antonio', greetWord: 'Hola'})
    expect(result).toEqual([
    { receivedGreet: {
                greet: 'Hello Gemma, how are you today?'
            }
    }, {
        receivedGreet: {
            greet: 'Hola Antonio, how are you today?'
        }
    }])
})