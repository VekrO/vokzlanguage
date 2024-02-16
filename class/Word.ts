export class Word {

    private innerValue: string;

    constructor(value: string) {
        this.innerValue = value;
    }

    public get() {
        return this.innerValue;
    }

    public show() {
        console.log('Palavra selecionada: ' + this.get());    
    }

}