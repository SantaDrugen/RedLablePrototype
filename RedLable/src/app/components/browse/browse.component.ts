// src/app/components/browse/browse.component.ts
import { Component, OnInit } from '@angular/core';
import { DealService } from '../../services/deal.service';
import { Deal } from '../../models/deal.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  template: `
    <div class="browse-container">
      <mat-accordion>
        <mat-expansion-panel *ngFor="let store of stores" [expanded]="true">
          <mat-expansion-panel-header>
            <mat-panel-title>
              {{ store }}
            </mat-panel-title>
          </mat-expansion-panel-header>
          <div class="deals-list">
            <mat-card *ngFor="let deal of dealsByStore[store]" class="deal-card">
              <img mat-card-image [src]="deal.imageUrl" alt="{{ deal.title }}">
              <mat-card-header>
                <mat-card-title>{{ deal.title }}</mat-card-title>
                <mat-card-subtitle>{{ deal.subCategory | titlecase }}</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <p>{{ deal.description }}</p>
                <p>Expires: {{ deal.expiryDate | date }}</p>
                <p>
                  Price: {{ deal.price | currency }}
                  <span class="old-price">Was: {{ deal.originalPrice | currency }}</span>
                </p>
              </mat-card-content>
            </mat-card>
          </div>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
  styles: [`
    .browse-container {
      padding: 16px;
    }
    
    .deals-list {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin: 8px 0;
    }
    
    .deal-card {
      width: 100%;
      max-width: 350px;
      flex: 1 1 calc(50% - 16px);
    }
    
    @media (max-width: 600px) {
      .deal-card {
        flex: 1 1 100%;
      }
    }
    
    .old-price {
      text-decoration: line-through;
      color: #888;
      font-size: 0.9rem;
    }
  `]
})
export class BrowseComponent implements OnInit {
  dealsByStore: { [store: string]: Deal[] } = {};
  stores: string[] = [];

  constructor(private dealService: DealService) {}

  ngOnInit(): void {
    const deals = this.dealService.getDeals();
    deals.forEach(deal => {
      if (!this.dealsByStore[deal.store]) {
        this.dealsByStore[deal.store] = [];
      }
      this.dealsByStore[deal.store].push(deal);
    });
    this.stores = Object.keys(this.dealsByStore);
  }
}
