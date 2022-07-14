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
        if (this.inputLanguage === "English") {
            this.inputTextElement.placeholder = "Type your text here..."
            this.isEnglishToMorse = true
        }

        if (this.inputLanguage === "Morse") {
            this.inputTextElement.placeholder = "Type Morse code using the '.' and '-' characters. Seperate letters with spaces (' ') and words with a slash ('/')."
            this.isEnglishToMorse = false
        }
    }

    clear() {
        this.input = ""
        this.output = ""
    }

    validateInput() {
        this.input = this.inputTextElement.value

        if (this.isEnglishToMorse) {
            const englishInputArray = this.input.toUpperCase().split("")
            this.translateToMorse(englishInputArray)
        }

        if (!this.isEnglishToMorse) {
            const morseWordArray = this.input.split("/")
            const morseInputArray = morseWordArray.map(word => word.split(' '))
            this.translateToEnglish(morseInputArray)
        }


    }

    translateToEnglish(morseInputArray) {
        const englishArr = morseInputArray.map(word => {
            return word.map(char => {
                const letterPair = this.alphabet.filter(letters => letters.includes(char))
                if (letterPair.length > 1) return letterPair[0][0]
                return letterPair.map(letter => letter[0])
            })
        })
        const cleanEnglish = englishArr.map(word => word.join('')).join(' ')
        this.output = cleanEnglish
    }

    translateToMorse(englishInputArray) {
        let isNewWord = true
        const morseArr = englishInputArray.map(char => {

            if (char === ' ' && isNewWord === true) {
                isNewWord = false;
                return '/';
            }

            if (char !== ' ') isNewWord = true;

            const letterPair = this.alphabet.filter(letters => letters.includes(char))
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

const translator = new Translator(inputTextElement, outputTextElement)

inputLanguage.addEventListener('change', () => {
    translator.setLanguage(inputLanguage.value);
    translator.clear();
    translator.updateDisplay();
})

inputTextElement.addEventListener('input', () => {
    translator.validateInput();
    translator.updateDisplay();
})
