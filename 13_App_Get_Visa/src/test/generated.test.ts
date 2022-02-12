import {generated, generatedAll, clearCanvas, addCandidate} from "../ts/generated";

jest.mock('../ts/utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementById: jest.fn(),
        getValueContext: jest.fn(),
        canvas: jest.fn(),
        getInnerText: jest.fn(),
        getValue: jest.fn(() => '1')
            .mockImplementationOnce(() => ''),
    }
});

describe('generated', () => {
    test('', () => {
        expect(true).toBeTruthy();
    })

    test('should be defined', () => {
        expect(generated).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof generated).toBe("function")
    })
    test('generated should be undefined', () => {
        expect(generated('id', [])).toBeUndefined();
    })

    test('should be defined', () => {
        expect(generatedAll).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof generatedAll).toBe("function")
    })
    test('generated All should be undefined', () => {
        expect(generatedAll([])).toBeUndefined();
    })
    test('generated All should be undefined', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: 'passport', english: 'A2'}
        expect(generatedAll([test, test, test, test, test, test])).toBeUndefined();
    })
})

describe('canvas', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('should be defined', () => {
        expect(clearCanvas).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof clearCanvas).toBe("function")
    })
    test('Canvas should be undefined', () => {
        expect(clearCanvas()).toBeUndefined();
    })
})

describe('add Candidate', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('should be defined', () => {
        expect(addCandidate).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof addCandidate).toBe("function")
    })
    test('add Candidate not information', () => {
        expect(addCandidate([], '', '', '', '', '')).toBeUndefined();
    })
    test('1 add Candidate', () => {
        expect(addCandidate([], 'Anna', '2200', '22', 'passport', 'A2')).toBeUndefined();
    })
    test('6 add Candidate', () => {
        const test = {name: 'Anna', balance: '2200', age: '22', document: 'passport', english: 'A2'}
        expect(addCandidate([test, test, test, test, test], 'Anna', '2200', '22', 'passport', 'A2')).toBeUndefined();
    })
})