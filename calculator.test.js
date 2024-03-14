import calculator from "./calculator";

describe('calculator', () => {
    const calculator = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: function (a, b) {
            if (b === 0) {
                throw new Error('Cannot divide by zero');
            }
            return a / b
        }
    };

    describe('add', () => {
        test.each([
            [1, 2, 3],
            [0, 0, 0],
            [-1, -2, -3],
        ])('adds %d + %d to equal %d', (a, b, expected) => {
            expect(calculator.add(a, b)).toBe(expected);
        });
    });

    describe('subtract', () => {
        test.each([
            [2, 1, 1],
            [0, 0, 0],
            [-1, -2, 1],
        ])('subtracts %d - %d to equal %d', (a, b, expected) => {
            expect(calculator.subtract(a, b)).toBe(expected);
        });
    });

    describe('multiply', () => {
        test.each([
            [2, 2, 4],
            [0, 5, 0],
            [-1, -2, 2],
        ])('multiplies %d * %d to equal %d', (a, b, expected) => {
            expect(calculator.multiply(a, b)).toBe(expected);
        });
    });

    describe('divide', () => {
        test.each([
            [4, 2, 2],
            [0, 1, 0],
            [-4, -2, 2],
        ])('divides %d / %d to equal %d', (a, b, expected) => {
            expect(calculator.divide(a, b)).toBe(expected);
        });

        test('divides by 0', () => {
            expect(() => calculator.divide(4, 0)).toThrow('Cannot divide by zero');
        });
    });
});

