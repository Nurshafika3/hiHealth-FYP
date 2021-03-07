import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionkidneyPage } from './solutionkidney.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionkidneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionkidneyPageRoutingModule {}
