import {isCollided, resolveCollision, rotate} from "../collision";
import {Circle} from "../Circle";

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
        innerWidth: jest.fn(()=> 1)
    };
});

describe('Circle', () => {
    test('should be defined', () => {
        expect(isCollided).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof isCollided).toBe("function")
    })
    test('Circle, should be falsy', () => {
        expect(isCollided({}, {})).toBeFalsy();
    })
})

describe('rotate', () => {
    test('should be defined', () => {
        expect(rotate).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof rotate).toBe("function")
    })
    test('rotate, should be {}', () => {
        expect(rotate(1,1)).toStrictEqual({"x": NaN, "y": NaN})
    })
})

describe('resolveCollision', () => {
    test('should be defined', () => {
        expect(resolveCollision).toBeDefined()
    })
    test('should be function', () => {
        expect(typeof resolveCollision).toBe("function")
    })
    test('resolveCollision, should be falsy', () => {
        expect(resolveCollision(undefined, undefined)).toBeFalsy();
    })
})