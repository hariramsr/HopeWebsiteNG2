import { Component, OnInit } from '@angular/core';
import { HopeService } from '../../hope.service';
import { EventService } from './event.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  events;
  event: string;
  currentEvent: Object;
  constructor(
    private hopeService: HopeService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.events = this.hopeService.getData().events;
    this.event = this.eventService.getCurrentEvent();
    this.currentEvent = this.events[this.event];
  }

}
