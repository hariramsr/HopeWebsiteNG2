import { Component, OnInit } from '@angular/core';
import { HopeService } from '../hope.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactUs:Object;
  constructor(
    private hopeService:HopeService
  ) { }

  ngOnInit() {
     this.contactUs=this.hopeService.getData().contactUs;
  }

}
