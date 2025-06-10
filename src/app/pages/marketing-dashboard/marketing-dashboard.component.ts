import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Campaign {
  name: string;
  visits: number;
  conversions: number;
  revenue: string;
}

@Component({
  standalone: true,
  selector: 'app-marketing-dashboard',
  imports: [CommonModule, RouterModule],
  templateUrl: './marketing-dashboard.component.html'
})
export class MarketingDashboardComponent {
  campaigns: Campaign[] = [
    { name: 'Summer Sale', visits: 1200, conversions: 52, revenue: '$5.2k' },
    { name: 'Black Friday', visits: 980, conversions: 41, revenue: '$4.3k' },
    { name: 'Email Leads', visits: 760, conversions: 32, revenue: '$2.7k' },
    { name: 'AdWords', visits: 550, conversions: 28, revenue: '$1.9k' },
    { name: 'Social Media', visits: 430, conversions: 19, revenue: '$1.3k' }
  ];
}
