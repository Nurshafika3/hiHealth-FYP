import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionsalmonPage } from './solutionsalmon.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionsalmonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsalmonPageRoutingModule {}
