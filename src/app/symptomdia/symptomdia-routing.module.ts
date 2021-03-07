import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomdiaPage } from './symptomdia.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomdiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomdiaPageRoutingModule {}
