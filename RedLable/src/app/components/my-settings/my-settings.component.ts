// src/app/components/my-settings/my-settings.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { SettingsService } from '../../services/settings.service';

interface Category {
  name: string;
  subcategories: string[];
}

@Component({
  selector: 'app-my-settings',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatButtonModule, ReactiveFormsModule],
  template: `
    <div class="settings-container">
      <h2>Select Deal Categories and Sub-categories</h2>
      <form [formGroup]="settingsForm" (ngSubmit)="saveSettings()">
        <div *ngFor="let category of categories">
          <h3>{{ category.name | titlecase }}</h3>
          <div [formGroupName]="category.name" class="sub-category-group">
            <mat-checkbox *ngFor="let sub of category.subcategories" [formControlName]="sub">
              {{ sub | titlecase }}
            </mat-checkbox>
          </div>
        </div>
        <button mat-raised-button color="primary" type="submit">
          Save Settings
        </button>
      </form>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 16px;
    }
    h2 {
      margin-bottom: 16px;
      font-size: 1.2rem;
    }
    h3 {
      margin: 16px 0 8px;
      font-size: 1.1rem;
    }
    .sub-category-group {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }
  `]
})
export class MySettingsComponent implements OnInit {
  // Define main categories with sub-categories.
  categories: Category[] = [
    { name: 'dairy', subcategories: ['milk', 'cheese', 'yogurt'] },
    { name: 'bread', subcategories: ['baguette', 'whole wheat', 'sourdough'] },
    { name: 'fruit', subcategories: ['apples', 'oranges', 'bananas'] },
    { name: 'meat', subcategories: ['beef', 'chicken', 'pork'] }
  ];

  settingsForm: FormGroup;

  constructor(private fb: FormBuilder, private settingsService: SettingsService) {
    // Build a nested form group for each main category.
    const formGroupConfig: { [key: string]: FormGroup } = {};
    this.categories.forEach(category => {
      const subGroupConfig: { [key: string]: any } = {};
      category.subcategories.forEach(sub => {
        subGroupConfig[sub] = this.fb.control(false);
      });
      formGroupConfig[category.name] = this.fb.group(subGroupConfig);
    });
    this.settingsForm = this.fb.group(formGroupConfig);
  }

  ngOnInit(): void {}

  saveSettings(): void {
    // Extract the selections per category.
    const selectedSettings: { [key: string]: string[] } = {};
    this.categories.forEach(category => {
      const subGroup = this.settingsForm.get(category.name) as FormGroup;
      selectedSettings[category.name] = category.subcategories.filter(sub => subGroup.get(sub)?.value);
    });
    // The settings service is updated with a flattened array of selected sub-categories.
    const selectedSubCategories = Object.values(selectedSettings).reduce((acc, subs) => acc.concat(subs), []);
    this.settingsService.setCategories(selectedSubCategories);
    alert('Settings saved: ' + JSON.stringify(selectedSettings));
  }
}
