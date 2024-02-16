import { DocumentService } from "../services/DocumentService";

export class Word {

    private innerValue: string;
    private selected: boolean = false;

    constructor(value: string) {
        this.innerValue = value;
    }

    public get() {
        return this.innerValue;
    }

    public show() {
        console.log('Palavra selecionada: ' + this.get());    
    }

    public handle(event: MouseEvent, elementChild: HTMLElement, documentService: DocumentService) {

        this.show();

        if(!this.selected) {
            this.select(documentService, elementChild);
        } else {
            this.unselect(documentService, elementChild);
        }

    }

    private select(documentService: DocumentService, elementChild: HTMLElement) {
        this.selected = true;
        documentService.setStyle(elementChild, 'background', 'blue');
        documentService.setStyle(elementChild, 'color', 'white');
    }

    private unselect(documentService: DocumentService, elementChild: HTMLElement) {
        this.selected = false;
        documentService.removeProperty(elementChild, 'background',);
        documentService.removeProperty(elementChild, 'color');
    }

}