// create an analyzeArray function that takes an array of numbers and returns them as an object

export default function analyzeArray(arr) {
    return {
        average: arr.reduce((a, b) => a + b, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

