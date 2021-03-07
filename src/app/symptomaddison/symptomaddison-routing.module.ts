import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomaddisonPage } from './symptomaddison.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomaddisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomaddisonPageRoutingModule {}
