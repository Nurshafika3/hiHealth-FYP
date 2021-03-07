import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionasthmaPage } from './solutionasthma.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionasthmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionasthmaPageRoutingModule {}
