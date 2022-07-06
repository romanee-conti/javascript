const translateButton = document.querySelector('.translate-btn')
const translateResult = document.querySelector('.translate-result')

const translateEnglishToFrench = (englishWord) => {
    if (englishWord === 'hello') return 'bonjour'
    else if (englishWord === 'goodbye') return 'au revoir'
    else return 'unavailable'
}

const updateDisplay = () => {
    const englishWord = document.querySelector('.input-box').value;
    const frenchWord = translateEnglishToFrench(englishWord)
    translateResult.innerHTML = frenchWord;
}

translateButton.addEventListener('click', () => {
    updateDisplay()
})