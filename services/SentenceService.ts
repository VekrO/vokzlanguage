import { Sentence } from "../class/Sentence";
import { Word } from "../class/Word";

export class SentenceService {

    constructor() {}

    createSentence(words: Word[]) {
        return new Sentence(words);
    }

    extractWords(sentence: string): Word[] {
        const sentenceText = sentence.split(' ');
        const words: Word[] = [];
        for(let i = 0; i < sentenceText.length; i++) {
            const word: Word = new Word(sentenceText[i]);
            words.push(word);
            if(!sentenceText[i + 1]) { // Adiciona uma quebra de inha para o fim da sentença.
                words.push(new Word('<br>'))
            }
        }
        return words;
    }

}