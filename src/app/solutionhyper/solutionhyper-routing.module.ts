import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionhyperPage } from './solutionhyper.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionhyperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionhyperPageRoutingModule {}
