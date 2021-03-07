import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionelbowPage } from './solutionelbow.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionelbowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionelbowPageRoutingModule {}
