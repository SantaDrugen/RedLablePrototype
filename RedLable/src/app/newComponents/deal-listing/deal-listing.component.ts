// src/app/deal-listing/deal-listing.component.ts
import { Component, OnInit } from '@angular/core';
import { Deal, MOCK_DEALS, Shop, MOCK_SHOPS } from '../../models/newData';
import { DealCardComponent } from '../deal-card/deal-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deal-listing',
  templateUrl: './deal-listing.component.html',
  standalone: true,            // ← add this
  imports: [DealCardComponent, CommonModule],
  styleUrls: ['./deal-listing.component.css']
})
export class DealListingComponent implements OnInit {
  allDeals: Deal[] = [];
  filteredDeals: Deal[] = [];
  shops: Shop[] = [];
  selectedShopId = '';
  expiryFilter = '';

  ngOnInit() {
    this.allDeals = MOCK_DEALS;
    this.shops = MOCK_SHOPS;
    this.applyFilters();
  }

  onShopChange(id: string) {
    this.selectedShopId = id;
    this.applyFilters();
  }

  onExpiryChange(date: string) {
    const input = event?.target as HTMLInputElement;
    this.expiryFilter = input.value;
    this.applyFilters();
  }

  private applyFilters() {
    let deals = [...this.allDeals];
    if (this.selectedShopId) {
      deals = deals.filter(d => d.shop.id === this.selectedShopId);
    }
    if (this.expiryFilter) {
      const cutoff = new Date(this.expiryFilter);
      deals = deals.filter(d => new Date(d.expiryDate) <= cutoff);
    }
    this.filteredDeals = deals;
  }
}
