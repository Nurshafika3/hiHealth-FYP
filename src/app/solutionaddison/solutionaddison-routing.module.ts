import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionaddisonPage } from './solutionaddison.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionaddisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionaddisonPageRoutingModule {}
