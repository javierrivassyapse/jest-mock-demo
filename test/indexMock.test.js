const greetingsMock = jest.fn()
        .mockReturnValueOnce('Hello Gemma, how are you today?')
        .mockReturnValueOnce('Hola Antonio, how are you today?')

    const postMock = jest.fn()
        .mockReturnValueOnce({ 
            receivedGreet: {
                greet: 'Hello Gemma, how are you today?'
            }
        })
        .mockReturnValueOnce({ 
            receivedGreet: {
                greet: 'Hola Antonio, how are you today?'
            }
        })

    mockModule = {
        greetings: greetingsMock,
        post: postMock
    }
jest.mock('../src/a-module', () => mockModule)
const moduleInTest = require('../src/index')

test('It does what it needs to do', async () => {
  
    const result = await moduleInTest.doSomething({name: 'Gemma'}, {name: 'Antonio', greetWord: 'Hola'})

    expect(result).toEqual([
        { receivedGreet: {
                    greet: 'Hello Gemma, how are you today?'
                }
        }, {
            receivedGreet: {
                greet: 'Hola Antonio, how are you today?'
            }
        }
    ])

    expect(postMock).toBeCalledTimes(2)
})