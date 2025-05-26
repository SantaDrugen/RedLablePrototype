import { Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { MyDealsComponent } from './components/my-deals/my-deals.component';
import { PreferencesComponent } from './newComponents/preferences/preferences.component';

export const routes: Routes = [
    { path: 'browse', component: BrowseComponent },
    { path: 'my-deals', component: MyDealsComponent },
    { path: 'preferences', component: PreferencesComponent },
    { path: '**', redirectTo: 'browse' }
];
