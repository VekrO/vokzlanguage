import { Word } from "./Word";

export class Sentence {

    private innerValue: Word[] = [];

    constructor(values: Word[]) {
        this.innerValue = values;
    }

    public get(): Word[] {
        return this.innerValue;
    }

}