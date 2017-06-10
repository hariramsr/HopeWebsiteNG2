import { Component } from '@angular/core';
import { SearchService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
