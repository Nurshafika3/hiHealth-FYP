import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutastePage } from './autaste.page';

const routes: Routes = [
  {
    path: '',
    component: AutastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutastePageRoutingModule {}
