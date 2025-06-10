import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarketingDashboardComponent } from './pages/marketing-dashboard/marketing-dashboard.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'marketing-dashboard', component: MarketingDashboardComponent, canActivate: [authGuard] },
  {
    path: 'taxpayers',
    loadChildren: () =>
      import('./modules/taxpayer/taxpayer.module').then((m) => m.TaxpayerModule),
    canActivate: [authGuard],
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**', redirectTo: 'dashboard' }
];

