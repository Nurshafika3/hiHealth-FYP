import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiaPage } from './audia.page';

const routes: Routes = [
  {
    path: '',
    component: AudiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiaPageRoutingModule {}
