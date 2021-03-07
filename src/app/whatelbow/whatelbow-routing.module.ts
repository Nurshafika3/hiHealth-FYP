import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatelbowPage } from './whatelbow.page';

const routes: Routes = [
  {
    path: '',
    component: WhatelbowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatelbowPageRoutingModule {}
