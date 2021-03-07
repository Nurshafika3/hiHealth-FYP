import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomhyperPage } from './symptomhyper.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomhyperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomhyperPageRoutingModule {}
