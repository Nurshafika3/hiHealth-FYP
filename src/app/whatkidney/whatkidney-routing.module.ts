import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatkidneyPage } from './whatkidney.page';

const routes: Routes = [
  {
    path: '',
    component: WhatkidneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatkidneyPageRoutingModule {}
