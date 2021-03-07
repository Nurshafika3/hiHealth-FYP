import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatocdPage } from './whatocd.page';

const routes: Routes = [
  {
    path: '',
    component: WhatocdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatocdPageRoutingModule {}
