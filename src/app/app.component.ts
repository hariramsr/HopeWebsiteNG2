import { Component } from '@angular/core';
import { SearchService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app works!';
  resources;
  constructor(
    private searchService: SearchService
    ){}
    ngOnInit() {
    }
}
