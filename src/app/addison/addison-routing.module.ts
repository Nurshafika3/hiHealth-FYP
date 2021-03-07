import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddisonPage } from './addison.page';

const routes: Routes = [
  {
    path: '',
    component: AddisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddisonPageRoutingModule {}
