import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuaddisonPage } from './auaddison.page';

const routes: Routes = [
  {
    path: '',
    component: AuaddisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuaddisonPageRoutingModule {}
