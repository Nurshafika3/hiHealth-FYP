import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhathyperPage } from './whathyper.page';

const routes: Routes = [
  {
    path: '',
    component: WhathyperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhathyperPageRoutingModule {}
