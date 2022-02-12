import {init} from "../index";
import {getRandomArbitrary, getRandomInt} from "../getRandom";

jest.mock('../Circle', () => {
    return {
        __esModule: true,
        Circle: jest.fn()
    }
})
jest.mock('../utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        getElementId: jest.fn(),
        windowWH: jest.fn(),
        getContext: jest.fn(),
        animation: jest.fn(),
    };
});

describe('init', () => {
    test('test', () => {
        expect(true).toBeTruthy();
    })
    test('should be defined', () => {
        expect(init).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof init).toBe("function")
    })
    test('init, should be undefined', () => {
        expect(init()).toBeUndefined();
    })
})

describe('get random', () => {
    test('should be defined', () => {
        expect(getRandomInt).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof getRandomInt).toBe("function")
    })
    test('should be get randomInt', () => {
        expect(getRandomInt(1,1)).toBe(1);
    })
    test('\'should be get random arbitrary', () => {
        expect(getRandomArbitrary(1,1)).toBe(1);
    })
})