import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudenguePage } from './audengue.page';

const routes: Routes = [
  {
    path: '',
    component: AudenguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudenguePageRoutingModule {}
