import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HyperPage } from './hyper.page';

const routes: Routes = [
  {
    path: '',
    component: HyperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HyperPageRoutingModule {}
