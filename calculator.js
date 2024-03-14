// a calculator opbject that contains functions for add, subtract, multiply, and divide
const calculator = {
    add: function (a, b) {
        return a + b
    },
    subtract: function (a, b) {
        return a - b
    },
    multiply: function (a, b) {
        return a * b
    },
    divide: function (a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b
    }
}

export default calculator