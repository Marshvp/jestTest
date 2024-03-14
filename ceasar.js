// create a ceasar cipher function that takes a string and a shift factor and returns with each character "shifted".

export default function ceasarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            const code = char.charCodeAt();

            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                return char;
            }
        })
        .join('');
}
