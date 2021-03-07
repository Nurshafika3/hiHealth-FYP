import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatdenguePage } from './whatdengue.page';

const routes: Routes = [
  {
    path: '',
    component: WhatdenguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatdenguePageRoutingModule {}
