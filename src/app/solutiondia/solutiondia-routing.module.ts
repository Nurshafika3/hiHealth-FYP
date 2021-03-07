import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutiondiaPage } from './solutiondia.page';

const routes: Routes = [
  {
    path: '',
    component: SolutiondiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutiondiaPageRoutingModule {}
