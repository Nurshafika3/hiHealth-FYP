import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuelbowPage } from './auelbow.page';

const routes: Routes = [
  {
    path: '',
    component: AuelbowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuelbowPageRoutingModule {}
