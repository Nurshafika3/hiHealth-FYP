import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionocdPage } from './solutionocd.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionocdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionocdPageRoutingModule {}
