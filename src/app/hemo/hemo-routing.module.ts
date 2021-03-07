import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HemoPage } from './hemo.page';

const routes: Routes = [
  {
    path: '',
    component: HemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HemoPageRoutingModule {}
