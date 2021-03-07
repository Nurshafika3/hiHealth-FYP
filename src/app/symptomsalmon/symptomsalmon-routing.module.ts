import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsalmonPage } from './symptomsalmon.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsalmonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsalmonPageRoutingModule {}
