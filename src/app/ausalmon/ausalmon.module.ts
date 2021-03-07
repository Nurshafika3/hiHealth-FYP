import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AusalmonPageRoutingModule } from './ausalmon-routing.module';

import { AusalmonPage } from './ausalmon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AusalmonPageRoutingModule
  ],
  declarations: [AusalmonPage]
})
export class AusalmonPageModule {}
