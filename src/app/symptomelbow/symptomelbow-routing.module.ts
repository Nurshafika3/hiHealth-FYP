import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomelbowPage } from './symptomelbow.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomelbowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomelbowPageRoutingModule {}
