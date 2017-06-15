import { Component, OnInit } from '@angular/core';
import { HopeService } from '../hope.service';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {
  accountDetails: Object;
  constructor(
     private hopeService: HopeService
  ) { }

  ngOnInit() {
    this.accountDetails = this.hopeService.getData().contactUs.accountDetails;
  }

}
