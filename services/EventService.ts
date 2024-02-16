export class EventService {
    constructor() {}
    addEventListener(element: HTMLElement, eventName: string, fn: any) {
        if(element) {
            element.addEventListener(eventName, fn);
        }
    }
}