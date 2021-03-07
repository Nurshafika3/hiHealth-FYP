import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhataddisonPage } from './whataddison.page';

const routes: Routes = [
  {
    path: '',
    component: WhataddisonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhataddisonPageRoutingModule {}
