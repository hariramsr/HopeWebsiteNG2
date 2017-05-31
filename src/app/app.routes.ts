import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ContributeComponent } from './contribute/contribute.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'gallery', component: GalleryComponent,
    //  children: [
    //   { path: '', component: MySearchComponent },
    //   { path: 'apiList', component: ApiListComponent }
    //  ]
  },
  { path: 'contact', component: ContactComponent},
  { path: 'contribute', component: ContributeComponent}
];
