import { Inject, Injectable } from '@angular/core';

@Injectable()
export class EventService {
    event;
    constructor() { }
    public getCurrentEvent() {
        return this.event;
    }
    public setCurrentEvent(data) {
        this.event = data;
    }
} 
