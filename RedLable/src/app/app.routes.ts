import { Routes } from '@angular/router';
import { BrowseComponent } from './components/browse/browse.component';
import { MySettingsComponent } from './components/my-settings/my-settings.component';
import { MyDealsComponent } from './components/my-deals/my-deals.component';

export const routes: Routes = [
    { path: 'browse', component: BrowseComponent },
    { path: 'my-deals', component: MyDealsComponent },
    { path: 'my-settings', component: MySettingsComponent },
    { path: '**', redirectTo: 'browse' }
];
