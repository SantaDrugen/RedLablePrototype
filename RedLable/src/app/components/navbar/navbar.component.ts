// src/app/components/navbar/navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SettingsDropdownComponent } from '../settings-dropdown/settings-dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, RouterLink, SettingsDropdownComponent],
  template: `
    <mat-toolbar color="primary">
      <span class="toolbar-title">Grocery Deals</span>
      <span class="spacer"></span>
      <button mat-button routerLink="/browse">Browse</button>
      <button mat-button routerLink="/my-deals">My Deals</button>
      <button mat-button [matMenuTriggerFor]="settingsMenu">My Settings</button>
    </mat-toolbar>
    <mat-menu #settingsMenu="matMenu" class="settings-menu">
  <div (click)="$event.stopPropagation()">
    <app-settings-dropdown></app-settings-dropdown>
  </div>
</mat-menu>
  `,
  styles: [`
    mat-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      height: 56px;
      padding: 0 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      background-color: #d81b60; /* A rose red for the navbar */
      color: #ffffff;
    }
    .toolbar-title {
      font-size: 18px;
      font-weight: 500;
    }
    .spacer {
      flex: 1 1 auto;
    }
    button[mat-button] {
      font-size: 14px;
      padding: 0 12px;
      text-transform: none;
      min-width: 50px;
    }
    @media (max-width: 600px) {
      mat-toolbar { padding: 0 4px; }
      button[mat-button] { font-size: 13px; padding: 0 8px; }
    }
  `]
})
export class NavbarComponent { }
