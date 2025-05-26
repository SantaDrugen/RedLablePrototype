import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreferenceService } from '../../services/preferences.service';
import { Deal, MOCK_DEALS } from '../../models/newData';
import { DealCardComponent } from '../../newComponents/deal-card/deal-card.component';

interface GroupedDeals {
  key: string;
  deals: Deal[];
  }

@Component({
selector: 'app-my-deals',
standalone: true,
imports: [CommonModule, DealCardComponent, FormsModule],
templateUrl: './my-deals.component.html',
styleUrls: ['./my-deals.component.css']
})
export class MyDealsComponent implements OnInit {
  sortOption: 'shop' | 'category' = 'shop';
  groupedDeals: GroupedDeals[] = [];

  constructor(private prefSvc: PreferenceService) {}

  ngOnInit() {
    this.prefSvc.prefs$.subscribe(() => this.updateDeals());
  }

  updateDeals() {
    const codes = this.prefSvc.preferences;
    const filtered = MOCK_DEALS.filter(d => codes.includes(d.gpcCategory));

    // Group by the selected key
    const groups: Record<string, Deal[]> = {};
    filtered.forEach(deal => {
      const key = this.sortOption === 'shop'
        ? deal.shop.name
        : // find the category name (fallback “Other”)
          ([
            { code: '10000123', name: 'Bread & Bakery' },
            { code: '10000456', name: 'Dairy Products' },
            { code: '10000567', name: 'Cheese' },
            { code: '10000678', name: 'Fresh Produce' },
            { code: '10000789', name: 'Meat & Poultry' },
            { code: '10000890', name: 'Seafood' },
            { code: '10000901', name: 'Beverages' }
          ].find(c => c.code === deal.gpcCategory)?.name || 'Other');

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(deal);
    });

    // Convert to array and sort group headers
    this.groupedDeals = Object.entries(groups)
      .map(([key, deals]) => ({ key, deals }))
      .sort((a, b) => a.key.localeCompare(b.key));
  }
}

