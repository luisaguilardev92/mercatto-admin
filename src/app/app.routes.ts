import { Routes } from '@angular/router';
import { TailadminLayout } from './tailadmin-layout/tailadmin-layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { Settings } from './pages/settings/settings';
import { Reports } from './pages/reports/reports';

export const routes: Routes = [
  {
    path: '',
    component: TailadminLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'profile', component: Profile },
      { path: 'settings', component: Settings },
      { path: 'reports', component: Reports }
    ]
  }
];
