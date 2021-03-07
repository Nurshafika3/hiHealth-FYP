import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomocdPage } from './symptomocd.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomocdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomocdPageRoutingModule {}
