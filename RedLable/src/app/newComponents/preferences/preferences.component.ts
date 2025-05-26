import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PreferenceService } from '../../services/preferences.service';

interface Category { code: string; name: string; }
const PRODUCT_CATEGORIES: Category[] = [
    { code: '10000123', name: 'Bread & Bakery' },
    { code: '10000456', name: 'Dairy Products' },
    { code: '10000567', name: 'Cheese' },
    { code: '10000678', name: 'Fresh Produce' },    // ← new
    { code: '10000789', name: 'Meat & Poultry' },    // ← new
    { code: '10000890', name: 'Seafood' },           // ← new
    { code: '10000901', name: 'Beverages' }          // ← new
  ];

@Component({
selector: 'app-preferences',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './preferences.component.html',
})
export class PreferencesComponent implements OnInit {
categories = PRODUCT_CATEGORIES;
prefs: Record<string, boolean> = {};

constructor(private prefSvc: PreferenceService) {}

ngOnInit() {
const saved = this.prefSvc.preferences;
this.categories.forEach(c => this.prefs[c.code] = saved.includes(c.code));
}

save() {
const favoriteCategories = this.categories
.filter(c => this.prefs[c.code])
.map(c => c.code);
this.prefSvc.save(favoriteCategories);
}
}