import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidneyPage } from './kidney.page';

const routes: Routes = [
  {
    path: '',
    component: KidneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KidneyPageRoutingModule {}
