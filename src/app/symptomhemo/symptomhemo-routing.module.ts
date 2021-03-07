import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomhemoPage } from './symptomhemo.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomhemoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomhemoPageRoutingModule {}
