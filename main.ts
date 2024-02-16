import { Sentence } from "./class/Sentence";
import { Word } from "./class/Word";
import { DocumentService } from "./services/DocumentService";
import { SentenceService } from "./services/SentenceService";
import { WordService } from "./services/WordService";

import SentencesJson from './sentences.json';

class Main {

    private sentences: Sentence[] = [];
    private words: Word[] = [];

    constructor(private sentenceService: SentenceService, private wordService: WordService, private documentService: DocumentService) {
            
        this.createSentences();
        this.createParagraph();

    }

    createSentences() {

        const database = SentencesJson["sentences"];
        const sentences = database[0].mike; // Sentença do texto mike.

        for(let i = 0; i < sentences.length; i++) {
            const description: string = sentences[i].paragraph;
            const words: Word[] = this.sentenceService.extractWords(description);
            this.words.push(...words);
        }
        
        console.log('WORDS: ', this.words);

    }
    
    createParagraph() {
        
        const sentence: Sentence = this.sentenceService.createSentence(this.words);
        const wordList: Word[] = sentence.get();

        const elementRoot: HTMLElement = this.documentService.getElementByClassName('.text');
        if(!elementRoot) {
            return;
        }

        for(let i = 0; i < wordList.length; i++) {
            let word: Word = wordList[i];
            if(word) {
                const elementChild: HTMLElement = this.documentService.createElement('span', word.get());
                this.documentService.addEventListener(elementChild, 'click', word.show.bind(word));
                this.documentService.setStyle(elementChild, 'padding', '5px');
                this.documentService.appendChild(elementRoot, elementChild);
            }   
        }

    }
       
}

new Main(new SentenceService(), new WordService(), new DocumentService());