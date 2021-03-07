import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhattastePage } from './whattaste.page';

const routes: Routes = [
  {
    path: '',
    component: WhattastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhattastePageRoutingModule {}
