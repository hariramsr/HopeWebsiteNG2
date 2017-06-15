import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.routing';
import { EventComponent } from './event/event.component';
import { EventService } from './event/event.service';

@NgModule({
  imports: [CommonModule, routing],
  declarations: [GalleryComponent, EventComponent],
  providers: [EventService]
})
export class GalleryModule {}
