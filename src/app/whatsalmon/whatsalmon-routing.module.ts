import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsalmonPage } from './whatsalmon.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsalmonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsalmonPageRoutingModule {}
