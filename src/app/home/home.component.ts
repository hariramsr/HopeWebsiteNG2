import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HopeService } from '../hope.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{provide: CarouselConfig, useValue: {interval:3000, noPause: false}}]
})
export class HomeComponent implements OnInit {
  data;
  constructor(
    private route: ActivatedRoute,
    private hopeService: HopeService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((result) => {
        this.data = result.backendData;
        this.hopeService.saveData(this.data);
      });
  }

}
