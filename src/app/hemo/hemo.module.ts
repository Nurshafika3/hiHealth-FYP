import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HemoPageRoutingModule } from './hemo-routing.module';

import { HemoPage } from './hemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HemoPageRoutingModule
  ],
  declarations: [HemoPage]
})
export class HemoPageModule {}
