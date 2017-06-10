import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SearchService } from './backend.service';

@Injectable()
export class BackendResolver implements Resolve<any> {
  constructor(
    private searchService: SearchService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.searchService.call();
  }
}