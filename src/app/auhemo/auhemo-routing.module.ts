import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuhemoPage } from './auhemo.page';

const routes: Routes = [
  {
    path: '',
    component: AuhemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuhemoPageRoutingModule {}
