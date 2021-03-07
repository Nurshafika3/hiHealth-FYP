import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutiontastePage } from './solutiontaste.page';

const routes: Routes = [
  {
    path: '',
    component: SolutiontastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutiontastePageRoutingModule {}
