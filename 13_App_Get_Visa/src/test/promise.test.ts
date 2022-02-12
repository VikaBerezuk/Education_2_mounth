import {promiseRace, startRace} from "../ts/promise";

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
        getPromise: jest.fn(),
        disabledButtonTrue: jest.fn()
    }
});

describe('get promise', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('should be defined', () => {
        expect(startRace).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof startRace).toBe("function")
    })
    test('startRace should be undefined', () => {
        expect(startRace([],  1,1)).toBeUndefined();
    })

    test('should be defined', () => {
        expect(promiseRace).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof promiseRace).toBe("function")
    })
    test('promiseRace should be undefined', ()=> {
        expect(promiseRace([],[])).toBeUndefined();
    })
})