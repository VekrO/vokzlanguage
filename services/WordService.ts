import { Word } from "../class/Word";

export class WordService {

    constructor() {}

    createWord(word: string) {
        return new Word(word).get();
    }

}