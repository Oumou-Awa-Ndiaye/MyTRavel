import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { DestinationsComponent } from './destinations.component';
import { ForfaitsComponent } from './forfaits.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'forfaits', component: ForfaitsComponent },
  { path: 'contact', component: ContactComponent },
];
