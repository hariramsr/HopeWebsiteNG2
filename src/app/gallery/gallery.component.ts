import { Component, OnInit } from '@angular/core';
import { HopeService } from '../hope.service';
import { SearchService } from '../backend.service'
import { EventService } from './event/event.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  events;
  arrayOfKeys;
  constructor(
    private hopeService: HopeService,
    private eventService: EventService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    if (this.hopeService.getData() && this.hopeService.getData().events) {
      this.events = this.hopeService.getData().events;
      this.arrayOfKeys = Object.keys(this.events);
    } else {
      this.searchService.call()
        .subscribe(data => {
          this.hopeService.saveData(data);
          this.events = data.events;
          this.arrayOfKeys = Object.keys(this.events);
        })
    }
  }

  public currentEvent(event) {
    this.eventService.setCurrentEvent(event);
  }
}
