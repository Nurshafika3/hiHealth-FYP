import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomtastePage } from './symptomtaste.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomtastePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomtastePageRoutingModule {}
