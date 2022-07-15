class Translator {
    constructor(inputTextElement, outputTextElement) {
        this.inputTextElement = inputTextElement
        this.outputTextElement = outputTextElement
        this.clear()

        this.alphabet = [
            ["A", ".-"], ["B", "-..."], ["C", "-.-."], ["D", "-.."], ["E", "."], ["F", "..-."], ["G", "--."], ["H", "...."], ["I", ".."], ["J", ".---"],
            ["K", "-.-"], ["L", ".-.."], ["M", "--"], ["N", "-."], ["O", "---"], ["P", ".--."], ["Q", "--.-"], ["R", ".-."], ["S", "..."], ["T", "-"], ["U", "..-"],
            ["V", "...-"], ["W", ".--"], ["X", "-..-"], ["Y", "-.--"], ["Z", "--.."], ["1", ".----"], ["2", "..---"], ["3", "...--"], ["4", "....-"], ["5", "....."],
            ["6", "-...."], ["7", "--..."], ["8", "---.."], ["9", "----."], ["0", "-----"], [".", ".-.-.-"], [",", "--..--"], ["?", "..--.."], ["'", ".----."], ["!", "-.-.--"],
            ["/", "-..-."], [":", "---..."], [";", "-.-.-."], ["=", "-...-"], ["-", "-....-"], ["_", "..--.-"], ["\"", ".-..-."], ["@", ".--.-."], ["(", "-.--.-"], [" ", ""]
        ];
    }

    setLanguage(inputLanguage) {
        this.inputLanguage = inputLanguage
        this.inputTextElement.removeAttribute('disabled')

        if (this.inputLanguage === "English") {
            this.inputTextElement.placeholder = "Type English text here..."
            this.isEnglishToMorse = true
        }

        if (this.inputLanguage === "Morse") {
            this.inputTextElement.placeholder = "Type Morse code here..."
            this.isEnglishToMorse = false
        }
    }

    clear() {
        this.input = ""
        this.output = ""
        this.isError = false
    }

    validateInput() {
        this.input = this.inputTextElement.value

        if (this.isEnglishToMorse) {
            const englishInputArray = this.input.toUpperCase().split("")
            this.translateToMorse(englishInputArray)
        }

        if (!this.isEnglishToMorse) {
            const morseWordArray = this.input.toLowerCase().split("/")
            const morseInputArray = morseWordArray.map(word => word.split(' '))
            this.translateToEnglish(morseInputArray)
        }


    }

    translateToEnglish(morseInputArray) {
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

    checkForError(errorMessage) {
        this.errorMessage = errorMessage

        if (this.isError === false) {
            this.errorMessage.style.display = 'none'
        }

        if (this.isError === true) {
            this.errorMessage.style.display = 'block'
            this.isError = false
        }
    }

    translateToMorse(englishInputArray) {
        let isNewWord = false
        const morseArr = englishInputArray.map(char => {

            if (char === ' ' && isNewWord === true) {
                isNewWord = false;
                return '/';
            }

            if (char !== ' ') isNewWord = true;

            const letterPair = this.alphabet.filter(letters => letters.includes(char))

            if (letterPair.length > 1) return letterPair[1][1] // to differentiate between 'full stop' punctuation mark and the letter 'E'. Morse code for the letter 'E' is a fullstop.

            return letterPair.map(letter => letter[1])
        })
        this.output = morseArr.join(' ')

    }

    updateDisplay() {
        this.outputTextElement.innerText = this.output
        this.inputTextElement.value = this.input
    }
}

const inputLanguage = document.querySelector('.input-language')
const inputTextElement = document.querySelector('.text-input')
const outputTextElement = document.querySelector('.text-output')
const errorMessage = document.querySelector('.error-msg')

const translator = new Translator(inputTextElement, outputTextElement)

inputLanguage.addEventListener('change', () => {
    translator.setLanguage(inputLanguage.value);
    translator.clear();
    translator.updateDisplay();
})

inputTextElement.addEventListener('input', () => {
    translator.validateInput();
    translator.updateDisplay();
    translator.checkForError(errorMessage);
})

