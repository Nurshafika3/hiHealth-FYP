import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsalmonPageRoutingModule } from './symptomsalmon-routing.module';

import { SymptomsalmonPage } from './symptomsalmon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsalmonPageRoutingModule
  ],
  declarations: [SymptomsalmonPage]
})
export class SymptomsalmonPageModule {}
