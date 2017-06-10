import { Inject, Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService {
    constructor(
        private http: Http,
    ) { }
    public call() {
        return this.http.get("assets/appData.json")
            .map((response) => {
                return response.json();
            });
    }
} 

// return this.http.post('https://apphope.herokuapp.com/getConfigData','')
// return response.json().data;