const {Painter} = require('./../Painter');

describe('Painter', () => {
    const painter = new Painter({strokeStyle:'#000000', beginPath(){}, moveTo(){}, lineTo(){}, stroke(){}});
    test('should be defined', () => {
        expect(painter.start).toBeDefined();
    })
    test('Painter start, should be undefined', () => {
        expect(painter.start()).toBeUndefined();
    })

    test('should be defined', () => {
        expect(painter.stop).toBeDefined();
    })
    test('Painter start', () => {
        expect(painter.stop()).toBeUndefined();
    })

    test('should be defined', () => {
        expect(painter.line).toBeDefined();
    })
    test('Painter line, should be undefined', () => {
        expect(painter.line()).toBeUndefined();
    })
})