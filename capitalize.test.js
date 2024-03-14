import capitalize from "./capitalize";

test('capitalizes a string', () => {
    expect(capitalize('hello world')).toBe('Hello World');
})
