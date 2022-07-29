import { translateToMorse } from "./translator";

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
})