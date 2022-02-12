import {ageCheck, balanceCheck, clear, documentCheck, langCheck, showCandidate, start} from "../ts";

jest.mock('../ts/utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementById: jest.fn(() => 1),
        getValueContext: jest.fn(),
        canvas: jest.fn(),
        getInnerText: jest.fn(),
        getValue: jest.fn(() => '1')
            .mockImplementationOnce(() => ''),
        getPromise: jest.fn(() => new Promise<void>(res => res())),
        disabledButton: jest.fn(),
        getCreateElTextAppendChild: jest.fn(),
        getContextCanvas:jest.fn(() => 1),
        getNameCanvas: jest.fn(),
    }
});

describe('show candidate', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('should be defined', () => {
        expect(showCandidate).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof showCandidate).toBe("function")
    })
    test('show candidate, should be undefined', () => {
        expect(showCandidate([])).toBeUndefined();
    })
    test('show candidate, should be undefined', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: 'passport', english: 'A2'}
        expect(showCandidate([test,test,test,test])).toBeUndefined();
    })
})

describe('start game', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('should be defined', () => {
        expect(start).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof start).toBe("function")
    })
    test('start game, should be undefined', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: '', english: 'A2'}
        expect(start([test])).toBeUndefined();
    })
})

describe('balance check', () => {
    test('should be defined', () => {
        expect(balanceCheck).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof balanceCheck).toBe("function")
    })
    test('balance check < 2000', () => {
        expect(balanceCheck(1880)).toBeFalsy();
    })
    test('balance check > 2000', () => {
        expect(balanceCheck(2880)).toBeTruthy();
    })
})

describe('age check', () => {
    test('should be defined', () => {
        expect(ageCheck).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof ageCheck).toBe("function")
    })
    test('age check < 18', () => {
        expect(ageCheck(15)).toBeFalsy();
    })
    test('balance check > 18 && < 60', () => {
        expect(ageCheck(25)).toBeTruthy();
    })
})

describe('document check', () => {
    test('should be defined', () => {
        expect(documentCheck).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof documentCheck).toBe("function")
    })
    test('document check !== \'password, insurance, photo\'', () => {
        expect(documentCheck('password, insurance')).toBeFalsy();
    })
    test('document check === \'password, insurance, photo\'', () => {
        expect(documentCheck('password, insurance, photo')).toBeTruthy();
    })
})

describe('lang check', () => {
    test('should be defined', () => {
        expect(langCheck).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof langCheck).toBe("function")
    })
    test('low level of english', () => {
        expect(langCheck('A1')).toBeFalsy();
    })
    test('appropriate level of English', () => {
        expect(langCheck('B2')).toBeTruthy();
    })
})

describe('clear', () => {
    test('should be defined', () => {
        expect(clear).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof clear).toBe("function")
    })
    test('clear, should be undefined', () => {
        expect(clear()).toBeUndefined();
    })
})