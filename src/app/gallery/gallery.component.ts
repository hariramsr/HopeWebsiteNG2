import { Component, OnInit } from '@angular/core';
import { HopeService } from '../hope.service';
import { EventService } from './event/event.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  events:Object;
  arrayOfKeys;
  constructor(
    private hopeService: HopeService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.events=this.hopeService.getData().events;
    this.arrayOfKeys = Object.keys(this.events);
  }

  public currentEvent(event) {
    this.eventService.setCurrentEvent(event);
  }

}
