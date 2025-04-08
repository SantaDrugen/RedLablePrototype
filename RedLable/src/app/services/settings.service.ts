// src/app/services/settings.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private categoriesSubject = new BehaviorSubject<string[]>([]);
  selectedCategories$ = this.categoriesSubject.asObservable();

  setCategories(categories: string[]): void {
    this.categoriesSubject.next(categories);
  }
}
