import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutiondenguePage } from './solutiondengue.page';

const routes: Routes = [
  {
    path: '',
    component: SolutiondenguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutiondenguePageRoutingModule {}
