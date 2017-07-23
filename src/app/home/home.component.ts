import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HopeService } from '../hope.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
        // this.hopeService.saveData(this.data);
      });
  }

}
