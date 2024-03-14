import ceasarCipher from "./ceasar";

test('ceasar cipher', () => {
    expect(ceasarCipher('hello', 3)).toBe('khoor');
})

test('ceasar cipher with numbers', () => {
    expect(ceasarCipher('hello123', 3)).toBe('khoor123');
})

test('ceasar cipher with special characters', () => {
    expect(ceasarCipher('hello!@#', 3)).toBe('khoor!@#');
})
