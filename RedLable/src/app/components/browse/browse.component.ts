// src/app/browse/browse.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealListingComponent } from '../../newComponents/deal-listing/deal-listing.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, DealListingComponent],
  template: `<app-deal-listing></app-deal-listing>`
})
export class BrowseComponent {}
