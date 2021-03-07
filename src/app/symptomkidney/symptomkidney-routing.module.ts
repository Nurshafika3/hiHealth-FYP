import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomkidneyPage } from './symptomkidney.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomkidneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomkidneyPageRoutingModule {}
