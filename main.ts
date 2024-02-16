import { Sentence } from "./class/Sentence";
import { Word } from "./class/Word";
import { DocumentService } from "./services/DocumentService";
import { SentenceService } from "./services/SentenceService";
import { WordService } from "./services/WordService";

import SentencesJson from './sentences.json';

class Main {

    private readonly rootClassName: string = '.root';
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
        const words: Word[] = sentence.get() as Word[]; // Lista de palavras.

        const elementRoot: HTMLElement = this.documentService.getElementByClassName(this.rootClassName);
        if(!elementRoot) {
            return;
        }

        this.documentService.setStyle(elementRoot, '-webkit-user-select', 'none')
        this.documentService.setStyle(elementRoot, '-ms-user-select', 'none')
        this.documentService.setStyle(elementRoot, 'user-select', 'none')

        for(let i = 0; i < words.length; i++) {
            const word: Word = words[i];
            const isBreakpoint: boolean = word && word.get() == '<br>'; // Verifica se é para dar espaço.
            if(word) {
                const tag: string = isBreakpoint ? 'br' : 'span';
                const elementChild: HTMLElement = this.documentService.createElement(tag, word.get());
                this.documentService.addEventListener(elementChild, 'click', (event: MouseEvent) => word.handle(event, elementChild, this.documentService));
                this.documentService.setStyle(elementChild, 'margin', '5px');
                this.documentService.setStyle(elementChild, 'cursor', 'pointer');
                this.documentService.appendChild(elementRoot, elementChild);
            }
        }

    }
       
}

new Main(new SentenceService(), new WordService(), new DocumentService());