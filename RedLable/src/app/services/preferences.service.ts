import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PreferenceService {
private readonly storageKey = 'favoriteCategories';
private prefsSubject = new BehaviorSubject<string[]>(this.loadFromStorage());
prefs$ = this.prefsSubject.asObservable();

private loadFromStorage(): string[] {
const raw = localStorage.getItem(this.storageKey);
return raw ? JSON.parse(raw) : [];
}

save(categories: string[]) {
localStorage.setItem(this.storageKey, JSON.stringify(categories));
this.prefsSubject.next(categories);
}

get preferences(): string[] {
return this.prefsSubject.value;
}
}