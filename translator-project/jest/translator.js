const alphabet = [
    ["A", ".-"], ["B", "-..."], ["C", "-.-."], ["D", "-.."], ["E", "."], ["F", "..-."], ["G", "--."], ["H", "...."], ["I", ".."], ["J", ".---"],
    ["K", "-.-"], ["L", ".-.."], ["M", "--"], ["N", "-."], ["O", "---"], ["P", ".--."], ["Q", "--.-"], ["R", ".-."], ["S", "..."], ["T", "-"], ["U", "..-"],
    ["V", "...-"], ["W", ".--"], ["X", "-..-"], ["Y", "-.--"], ["Z", "--.."], ["1", ".----"], ["2", "..---"], ["3", "...--"], ["4", "....-"], ["5", "....."],
    ["6", "-...."], ["7", "--..."], ["8", "---.."], ["9", "----."], ["0", "-----"], [".", ".-.-.-"], [",", "--..--"], ["?", "..--.."], ["'", ".----."], ["!", "-.-.--"],
    ["/", "-..-."], [":", "---..."], [";", "-.-.-."], ["=", "-...-"], ["-", "-....-"], ["_", "..--.-"], ["\"", ".-..-."], ["@", ".--.-."], ["(", "-.--.-"], [" ", ""]
];

// takes an array of English capital letters and punctuation marks and returns a single string of morse code,
// with each letter separated by a space and each word separated by a forward slash "/"

export const translateToMorse = (englishInputArray) => {
    let output = '';
    let isNewWord = false;
    const morseArr = englishInputArray.map(char => {

        if (char === ' ' && isNewWord === true) {
            isNewWord = false;
            return '/';
        }

        if (char !== ' ') isNewWord = true;

        const letterPair = alphabet.filter(letters => letters.includes(char))

        if (letterPair.length > 1) return letterPair[1][1] // to differentiate between 'full stop' punctuation mark and the letter 'E'. Morse code for the letter 'E' is a fullstop.

        return letterPair.map(letter => letter[1])
    })
    output = morseArr.join(' ')
    return output;
}



const translateToEnglish = (morseInputArray) => {
    const englishArr = morseInputArray.map(word => {
        return word.map(char => {
            const letterPair = this.alphabet.filter(letters => letters.includes(char))

            if (letterPair.length > 1) return letterPair[0][0] // to differentiate between 'full stop' and letter 'E'. Morse code for the letter 'E' is a fullstop.

            if (letterPair.length === 0) {
                this.isError = true;
                return;
            }

            return letterPair.map(letter => letter[0]);

        })
    })
    const cleanEnglish = englishArr.map(word => word.join('')).join(' ')
    this.output = cleanEnglish
}