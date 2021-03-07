import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsalmonPageRoutingModule } from './whatsalmon-routing.module';

import { WhatsalmonPage } from './whatsalmon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsalmonPageRoutingModule
  ],
  declarations: [WhatsalmonPage]
})
export class WhatsalmonPageModule {}
