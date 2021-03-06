import { translateToMorse } from "./translator";
import { translateToEnglish } from "./translator";

describe('Tests to determine the correct output is given when translating to and from Morse Code', () => {

    describe('English to Morse Code', () => {
        const morseOutput = translateToMorse(['S', 'O', 'S']);

        it('Should return a string', () => {
            expect(typeof morseOutput).toBe('string');
            
        })
        it('Should return correct Morse output', () => {
            expect(morseOutput).toBe('... --- ...');
        })
    })

    describe('Morse Code to English', () => {
        const englishOutput = translateToEnglish([['...', '---', '...']])

        it('Should return a string', () => {
            expect(typeof englishOutput).toBe('string');
        })

        it('Should return correct English output', () => {
            expect(englishOutput).toBe('SOS');
        })

        it('Should return an error if not valid Morse Code', () => {
            expect(translateToEnglish([['h']])).toBe('Error')
        })
    })
    
})



