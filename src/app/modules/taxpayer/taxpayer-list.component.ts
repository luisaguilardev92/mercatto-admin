import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-taxpayer-list',
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2 class="text-xl font-bold mb-4">Taxpayers</h2>
      <p>Taxpayer module works!</p>
    </div>
  `
})
export class TaxpayerListComponent {}
