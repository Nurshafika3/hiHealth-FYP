import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatocdPageRoutingModule } from './whatocd-routing.module';

import { WhatocdPage } from './whatocd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatocdPageRoutingModule
  ],
  declarations: [WhatocdPage]
})
export class WhatocdPageModule {}
