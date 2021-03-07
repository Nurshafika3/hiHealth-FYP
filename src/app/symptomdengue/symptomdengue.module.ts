import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomdenguePageRoutingModule } from './symptomdengue-routing.module';

import { SymptomdenguePage } from './symptomdengue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomdenguePageRoutingModule
  ],
  declarations: [SymptomdenguePage]
})
export class SymptomdenguePageModule {}
