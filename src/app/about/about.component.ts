import { Component, OnInit } from '@angular/core';
import { HopeService } from '../hope.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data;
  constructor(
    // private hopeService: HopeService
  ) { }

  ngOnInit() {
    // this.data = this.hopeService.getData().about;
  }
}
