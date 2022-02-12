import {AList} from "./../AList";

describe("tests for AList", () => {
    const testAList = new AList;
    testAList.add(7);
    testAList.add(1);
    testAList.add(99);

    test('test', () => {
        expect(true).toBe(true);
    })
    test('add element to array, should be undefined', () => {
        expect(testAList.add(1)).toBeUndefined();
    })
    test('contains array, should be truthy', () => {
        expect(testAList.contains(7)).toBeTruthy();
    })
    test('contains array,  should be falsy', () => {
        expect(testAList.contains(22)).toBeFalsy();
    })
    test('should be get array', () => {
        expect(testAList.get(2)).toBe(99);
    })
    test('get array, should be undefined', () => {
        expect(testAList.get(55)).toBeUndefined();
    })
    test('should be get size array', () => {
        expect(testAList.getSize()).toBe(4);
    })

    test('should be max index', () => {
        expect(testAList.maxIndex()).toBe(2);
    })
    test('should be max value', () => {
        expect(testAList.maxValue()).toBe(99);
    })
    test('should be min index', () => {
        expect(testAList.minIndex()).toBe(0);
    })
    test('should be min value', () => {
        expect(testAList.minValue()).toBe(1);
    })
    test('should be print', () => {
        expect(testAList.print()).toStrictEqual([7, 1, 99, 1]);
    })
    test('should be reverse', () => {
        expect(testAList.reverse()).toStrictEqual([1, 99, 1, 7]);
    })
    test('should be to Array', () => {
        expect(testAList.toArray()).toEqual([1,99,1,7]);
    })
    test('should be half Reverse', () => {
        expect(testAList.halfReverse()).toEqual([1, 7, 1, 99 ]);
    })
    test('should be set', () => {
        expect(testAList.set(55, 1)).toEqual([1,55,1,7])
    })
    test('should be set', () => {
        expect(testAList.set(55, 5)).toEqual([1,55,1,7])
    })
    test('should be set', () => {
        expect(testAList.set(55, -1)).toEqual([1,55,1,7])
    })
    test('should be remove All', () => {
        expect(testAList.removeAll([1])).toStrictEqual( [undefined, 55, undefined, 7]);
    })
    test('should be retainAll', () => {
        expect(testAList.retainAll([7])).toStrictEqual([undefined, undefined, undefined, 7]);
    })
    test('remove, should be undefined', () => {
        expect(testAList.remove([2])).toBeUndefined();
    })
    test('should be  remove all', () => {
        expect(testAList.removeAll([2])).toStrictEqual([undefined, undefined, undefined, 7]);
    })
    test('should be toString', () => {
        expect(testAList.toString()).toBe( ",,,7,,,7,,,7,,,7");
    })
    test('should be sort', () => {
        testAList.add(5);
        testAList.add(4);
        testAList.add(3);
        expect(testAList.sort()).toStrictEqual( [undefined,undefined, undefined,3,4,5,7]);
    })
    test('clear array, should be undefined', () => {
        expect(testAList.clear()).toBeUndefined();
    })
})