import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-taxpayer-list',
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex h-screen bg-gray-100 relative">
      <button class="p-4 md:hidden" (click)="sidebarOpen = true">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div *ngIf="sidebarOpen" (click)="sidebarOpen = false" class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"></div>
      <aside [ngClass]="{ '-translate-x-full': !sidebarOpen }" class="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transform transition-transform md:translate-x-0 md:static md:shadow-none">
        <div class="p-4 text-lg font-bold">Mercatto</div>
        <nav class="px-2 space-y-1">
          <a routerLink="/dashboard" routerLinkActive="bg-gray-200" class="block py-2 px-4 rounded hover:bg-gray-200">Dashboard</a>
          <a routerLink="/marketing-dashboard" routerLinkActive="bg-gray-200" class="block py-2 px-4 rounded hover:bg-gray-200">Marketing</a>
          <a routerLink="/taxpayers" routerLinkActive="bg-gray-200" class="block py-2 px-4 rounded hover:bg-gray-200">Taxpayers</a>
        </nav>
      </aside>
      <div class="flex flex-col flex-1 overflow-y-auto md:ml-64">
        <header class="bg-white shadow p-4">
          <h1 class="text-xl font-semibold">Taxpayers</h1>
        </header>
        <main class="p-4">
          <h2 class="text-xl font-bold mb-4">Taxpayers</h2>
          <p>Taxpayer module works!</p>
        </main>
      </div>
    </div>
  `
})
export class TaxpayerListComponent {
  sidebarOpen = false;
}
