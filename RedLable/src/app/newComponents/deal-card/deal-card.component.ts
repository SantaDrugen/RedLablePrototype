// deal-card.component.ts
import { Component, Input } from '@angular/core';
import { Deal } from '../../models/newData';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-deal-card',
    standalone: true,            // ← add this
    templateUrl: './deal-card.component.html',
    imports: [CommonModule],
    styleUrls: ['./deal-card.component.css']
  })
  export class DealCardComponent {
  @Input() deal!: Deal;

  // Optional: compute distance if you inject a location service
  // get distance() { return this.deal.distanceKm?.toFixed(1) + ' km'; }
}