import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomelbowPageRoutingModule } from './symptomelbow-routing.module';

import { SymptomelbowPage } from './symptomelbow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomelbowPageRoutingModule
  ],
  declarations: [SymptomelbowPage]
})
export class SymptomelbowPageModule {}
