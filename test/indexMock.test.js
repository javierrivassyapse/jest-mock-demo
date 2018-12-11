
beforeEach(() => {
    jest.resetModules()
  });
describe('positive cases', () => {
    beforeEach(() => {
        greetingsMock = jest.fn()
                .mockReturnValueOnce('Hello Gemma, how are you today?')
                .mockReturnValueOnce('Hola Antonio, how are you today?')
        
            postMock = jest.fn()
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
    })
    
    test('It does what it needs to do', async () => {
        const moduleInTest = require('../src/index')
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
        expect(postMock).toBeCalledWith('Hello Gemma, how are you today?')
        expect(postMock).toBeCalledWith('Hola Antonio, how are you today?')
    })

})

describe('negative cases', () => {
    beforeEach(() => {
        greetingsMock = jest.fn()
                .mockReturnValueOnce('Hello Gemma, how are you today?')
                .mockReturnValueOnce('Hola Antonio, how are you today?')
                .mockReturnValue('blah')
        
            postMock = jest.fn()
                .mockImplementation(() => {
                    return Promise.reject(new Error('booo'))
                })
        
            mockModule = {
                greetings: greetingsMock,
                post: postMock
            }
        jest.doMock('../src/a-module', () => mockModule)
    })
    
    test('It does what it needs to do', async () => {
        const moduleInTest = require('../src/index')
        expect(moduleInTest.doSomething({name: 'Gemma'}, {name: 'Antonio', greetWord: 'Hola'})).rejects.toThrow('booo')
    })

})
