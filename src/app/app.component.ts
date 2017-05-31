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
      this.searchService.call().subscribe(
        (data) => {
          this.resources = data;
          console.log(this.resources);
        },
        (error) => {
        }
      );
    }
}
