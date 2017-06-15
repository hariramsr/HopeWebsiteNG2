import { Inject, Injectable } from '@angular/core';



@Injectable()
export class HopeService {
    resources;
    constructor() { }
    public getData() {
        return this.resources;
    }
    //
    public saveData(param) {
        this.resources = param;
    }
} 
