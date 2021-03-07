import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AukidneyPage } from './aukidney.page';

const routes: Routes = [
  {
    path: '',
    component: AukidneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AukidneyPageRoutingModule {}
