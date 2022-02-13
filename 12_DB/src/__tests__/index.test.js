const  { init } = require('../index');
const {tasks} = require("../table");

jest.mock('../logic', () => {
    return {
        __esModule: true,
        renderUI: jest.fn(() => true),
    };
});

jest.mock('../utils', () => {
    return {
        __esModule: true,
        checkDatabase: jest.fn(() => true),
    };
});

describe('tests for mainLoop function', () => {
    test('has to be defined', () => {
        expect(init).toBeDefined();
    })
    test('has to be function', () => {
        expect(typeof init).toBe('function');
    })
    test('should be init', () => {
        expect(init()).toBeTruthy();
    })
})

describe('table', () => {
    test('has to be defined', () => {
        expect(tasks).toBeDefined();
    })
    test('console table', () => {
        expect(tasks.addRow({ right_align_text: "1.Вывести общее число жителей",
            button: 1})).toBeUndefined()
    })
})