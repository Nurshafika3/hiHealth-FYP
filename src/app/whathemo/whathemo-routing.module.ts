import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhathemoPage } from './whathemo.page';

const routes: Routes = [
  {
    path: '',
    component: WhathemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhathemoPageRoutingModule {}
