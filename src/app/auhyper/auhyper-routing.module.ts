import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuhyperPage } from './auhyper.page';

const routes: Routes = [
  {
    path: '',
    component: AuhyperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuhyperPageRoutingModule {}
