// src/app/components/settings-dropdown/settings-dropdown.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsService } from '../../services/settings.service';

interface Category {
  name: string;
  subcategories: string[];
}

@Component({
  selector: 'app-settings-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCheckboxModule],
  template: `
    <div class="settings-dropdown-container">
      <h3>My Settings</h3>
      <form [formGroup]="settingsForm">
        <div *ngFor="let category of categories" class="category">
          <h4>{{ category.name | titlecase }}</h4>
          <div [formGroupName]="category.name" class="sub-category-group">
            <mat-checkbox *ngFor="let sub of category.subcategories"
                          [formControlName]="sub">
              {{ sub | titlecase }}
            </mat-checkbox>
          </div>
        </div>
      </form>
    </div>
  `,
  styles: [`
    .settings-dropdown-container {
      padding: 16px;
      max-width: 300px;
    }
    h3 {
      margin: 0 0 8px;
      font-size: 1.1rem;
    }
    .category {
      margin-bottom: 12px;
    }
    h4 {
      margin: 4px 0;
      font-size: 1rem;
    }
    .sub-category-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  `]
})
export class SettingsDropdownComponent implements OnInit {
  // Define main categories with sub-categories.
  categories: Category[] = [
    { name: 'dairy', subcategories: ['milk', 'cheese'] },
    { name: 'bread', subcategories: ['baguette', 'sourdough'] },
    { name: 'fruit', subcategories: ['apples', 'oranges'] },
    { name: 'meat', subcategories: ['beef', 'chicken'] }
  ];

  settingsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService
  ) {
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

  ngOnInit(): void {
    // Update settings in real time as changes occur.
    this.settingsForm.valueChanges.subscribe(() => {
      const selectedSettings: string[] = [];
      this.categories.forEach(category => {
        const subGroup = this.settingsForm.get(category.name) as FormGroup;
        category.subcategories.forEach(sub => {
          if (subGroup.get(sub)?.value) {
            selectedSettings.push(sub);
          }
        });
      });
      this.settingsService.setCategories(selectedSettings);
    });
  }
}
