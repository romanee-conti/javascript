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
            ["/", "-..-."], [":", "---..."], [";", "-.-.-."], ["=", "-...-"], ["-", "-....-"], ["_", "..--.-"], ["\"", ".-..-."], ["@", ".--.-."], ["(", "-.--.-"], [" ", " "]
        ];
    }

    setLanguage(inputLanguage) {
        this.inputLanguage = inputLanguage
        if (this.inputLanguage === "English") {
            this.inputTextElement.placeholder = "Type your text here..."
            this.isEnglishToMorse = true
        }

        if (this.inputLanguage === "Morse") {
            this.inputTextElement.placeholder = "Type Morse code using the '.' and '-' characters. Seperate words with spaces (' ') and letters with a slash ('/')."
            this.isEnglishToMorse = false
        }
    }

    clear() {
        this.input = ""
        this.output = ""
    }

    // translateToEnglish() {
    //     const englishOutput = '';
    // }

    // translateToMorse() {
    //     const englishArray = this.input.split("")
    //     const morseOutput = englishArray.map(char => {
    //     })

    // }

    updateDisplay() {
        this.inputTextElement.value = this.input
        this.outputTextElement.innerText = this.output
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
