import { Component, OnInit } from '@angular/core';
import { HopeService } from './hope.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'app works!';
  contactUs;
  constructor(
    private hopeService: HopeService
    ) {}
    ngOnInit() {
      // this.contactUs=this.hopeService.getData().contactUs;
    }
}

