// src/app/components/my-deals/my-deals.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Deal } from '../../models/deal.model';
import { DealService } from '../../services/deal.service';
import { SettingsService } from '../../services/settings.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-deals',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  template: `
    <div class="my-deals-container">
      <h2>My Deals</h2>
      <ng-container *ngIf="selectedCategories.length; else noSettings">
        <ng-container *ngIf="hasDeals; else noDeals">
          <mat-accordion>
            <mat-expansion-panel *ngFor="let store of storeKeys" [expanded]="true">
              <mat-expansion-panel-header>
                <mat-panel-title>
                  {{ store }}
                </mat-panel-title>
              </mat-expansion-panel-header>
              <div class="deals-list">
                <mat-card *ngFor="let deal of groupedDeals[store]" class="deal-card">
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
        </ng-container>
        <ng-template #noDeals>
          <p>No deals available for the selected settings.</p>
        </ng-template>
      </ng-container>
      <ng-template #noSettings>
        <p>Please select deal categories and sub-categories in My Settings.</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .my-deals-container {
      padding: 16px;
    }
    h2 {
      margin-bottom: 16px;
      font-size: 1.2rem;
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
export class MyDealsComponent implements OnInit, OnDestroy {
  private settingsSub!: Subscription;
  allDeals: Deal[] = [];
  groupedDeals: { [store: string]: Deal[] } = {};
  storeKeys: string[] = [];
  selectedCategories: string[] = [];
  hasDeals: boolean = false;

  constructor(
    private dealService: DealService,
    private settingsService: SettingsService
  ) {}

  ngOnInit(): void {
    // Retrieve the full list of deals (static list)
    this.allDeals = this.dealService.getDeals();

    // Subscribe to the selected categories from the SettingsService
    this.settingsSub = this.settingsService.selectedCategories$.subscribe(categories => {
      this.selectedCategories = categories;
      this.filterDeals();
    });
  }

  ngOnDestroy(): void {
    if (this.settingsSub) {
      this.settingsSub.unsubscribe();
    }
  }

  private filterDeals(): void {
    // Filter deals based on the user's selected sub-categories
    const filteredDeals = this.allDeals.filter(deal =>
      this.selectedCategories.includes(deal.subCategory)
    );
    this.hasDeals = filteredDeals.length > 0;

    // Group the filtered deals by store
    this.groupedDeals = {};
    filteredDeals.forEach(deal => {
      if (!this.groupedDeals[deal.store]) {
        this.groupedDeals[deal.store] = [];
      }
      this.groupedDeals[deal.store].push(deal);
    });
    this.storeKeys = Object.keys(this.groupedDeals);
  }
}
