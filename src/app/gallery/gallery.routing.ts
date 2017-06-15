import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './gallery.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'event', component: EventComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
