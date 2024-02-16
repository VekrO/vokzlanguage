import { EventService } from "./EventService";

export class DocumentService {

    private document: Document = document;

    constructor() { }

    createElement(elementName: string, textContent: string): HTMLElement {
        const element: HTMLElement = this.document.createElement(elementName);
        if(element) {
            this.setTextContent(element, textContent);
        }
        return element;
    }

    setTextContent(element: HTMLElement, textContent: string) {
        if(element) {
            element.textContent = textContent;
        }
    }

    setStyle(element: HTMLElement, property: string, value: string) {
        if(element) {
            element.style.setProperty(property, value);
        }
    }

    appendChild(elementRoot: HTMLElement, elementChild: HTMLElement) {
        if(elementRoot && elementChild) {
            elementRoot.appendChild(elementChild);
        }
    }

    getElementByClassName(className: string): HTMLElement {
        return this.document.querySelector(className) as HTMLElement;
    }

    addEventListener(element: HTMLElement, eventName: string, fn: any) {
        const eventService: EventService = new EventService();
        eventService.addEventListener(element, eventName, fn);
    }

}