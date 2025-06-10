import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaxpayerListComponent } from './taxpayer-list.component';
import { TAXPAYER_ROUTES } from './taxpayer.routes';

@NgModule({
  imports: [TaxpayerListComponent, RouterModule.forChild(TAXPAYER_ROUTES)],
})
export class TaxpayerModule {}
