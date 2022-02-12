import {LList} from "../LList"

describe('tests for LList', () => {
    test('should be contains', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.contains(10)).toBeTruthy()
    })
    test('should be contains', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.contains(11)).toBeFalsy()
    })
    test('should be get', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.get(2)).toBe(15)
    })
    test('should be getSize', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.getSize()).toBe(4)
    })
    test('should be print', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.print()).toBeUndefined()
    })
    test('should be minIndex', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.minIndex()).toBe(0)
    })
    test('should be maxIndex', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.maxIndex()).toBe(3)
    })
    test('should be maxValue', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.maxValue()).toBe(20)
    })
    test('should be minValue', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.minValue()).toBe(5)
    })
    test('should be retainAll', () => {
        const testLList = new LList([1, 2, 3, 4, 5])
        expect((() => {
                testLList.retainAll([1, 2])
                return testLList.toArray()
            })()).toEqual([1, 2])
    })
    test('should be reverse', () => {
        const testLList = new LList([1, 2, 3, 4, 5])
        expect((() => {
                testLList.reverse()
                return testLList.toArray()
            })()).toEqual([5, 4, 3, 2, 1])
    })
    test('should be halfReverse', () => {
        const testLList = new LList([1, 2, 3, 4, 5])
        expect((() => {
            testLList.halfReverse()
            return testLList.toArray()
        })()).toEqual([3, 4, 5, 1, 2])
    })
    test('should be toArray', () => {
        const testLList = new LList([5, 10, 15, 20])
        expect(testLList.toArray()).toEqual([5, 10, 15, 20])
    })
    test('should be toString', () => {
        const testLList = new LList([1, 2, 3])
        expect(testLList.toString()).toBe('123')
    })
    test('should be sort', () => {
        const testLList = new LList([22, 11, 5, 1, 32])
        expect((() => {
            testLList.sort()
            return testLList.toArray()
        })()).toEqual([1, 5, 11, 22, 32])
    })
    test('should be set', () => {
        const testLList = new LList([22, 11, 5, 1, 32])
        expect((() => {
            testLList.set(4, 0)
            return testLList.toArray()
        })()).toEqual([4, 11, 5, 1, 32])
    })
    test('should be set2', () => {
        const testLList = new LList([22, 11, 5, 1, 32])
        expect((() => {
            testLList.set(5, -1)
            return testLList.toArray()
        })()).toEqual([22, 11, 5, 1, 32])
    })
    test('should be remove all', () => {
        const testLList = new LList([22, 11, 5, 1, 32])
        expect((() => {
            testLList.removeAll([22, 11])
            return testLList.toArray()
        })()).toEqual([5, 1, 32])
    })
    test('should be remove all', () => {
        const testLList = new LList([1, 2])
        expect((() => {
            testLList.removeAll([1, 2, 3, 4, 5])
            return testLList.toArray()
        })()).toEqual([])
    })
    test('should be remove all', () => {
        const testLList = new LList([1, 2])
        expect((() => {
            testLList.removeAll([2, 3, 4, 5]);
            return testLList.toArray()
        })()).toEqual([1])
    })
    test('should be remove', () => {
        const testLList = new LList([1, 2, 3, 10])
        expect(testLList.remove(10)).toEqual(10)
    })
    test('should be clear', () => {
        const testLList = new LList([1, 2, 3])
        expect((() => {
            testLList.clear()
            return testLList.toArray()
        })()).toEqual([])
    })
    test('should be revers', () => {
        const testLList = new LList([])
        expect(testLList.reverse()).toBeUndefined();
    })
    test('should be halfReverse', () => {
        const testLList = new LList([])
        expect(testLList.halfReverse()).toBeUndefined();
    })
    test('should be get', () => {
        const testLList = new LList([1])
        expect(testLList.get(-5)).toBe(-1);
    })
})
