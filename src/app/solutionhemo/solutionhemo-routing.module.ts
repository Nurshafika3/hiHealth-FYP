import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionhemoPage } from './solutionhemo.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionhemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionhemoPageRoutingModule {}
