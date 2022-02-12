import {paint, showAllImg, closed} from '../app/index';

jest.mock('../app/utils', () => {
    return {
        __esModule: true,
        addListener: jest.fn(),
        api: jest.fn(),
        getElementAppendChild: jest.fn(() => '12'),
        createElement: jest.fn(),
        showDisplay: jest.fn(),
        querySelectorAll: jest.fn(() => [])
    }
});

describe('test all', () => {
    const data = [{url: 'tets'}]

    test('test', () => {
        expect(true).toBe(true);
    })

   describe('paint', () => {
       test('should be defined', () => {
           expect(paint).toBeDefined();
       })
       test('paint should be undefined', () => {
           expect(paint(data)).toBeUndefined();
       })
   })

   describe('show All Img', () => {
       test('should be defined', () => {
           expect(showAllImg).toBeDefined();
       })
       test('showAllImg should be undefined', () => {
           expect(showAllImg(data)).toBeUndefined();
       })
   })

   describe('closed', () => {
       test('should be defined', () => {
           expect(closed).toBeDefined();
       })
       test('closed should be undefined', () => {
           expect(closed()).toBeUndefined();
       })
   })
})
