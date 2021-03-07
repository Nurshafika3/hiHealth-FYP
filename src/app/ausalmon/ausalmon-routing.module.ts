import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AusalmonPage } from './ausalmon.page';

const routes: Routes = [
  {
    path: '',
    component: AusalmonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AusalmonPageRoutingModule {}
