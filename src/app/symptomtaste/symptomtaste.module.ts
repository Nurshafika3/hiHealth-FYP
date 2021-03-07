import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomtastePageRoutingModule } from './symptomtaste-routing.module';

import { SymptomtastePage } from './symptomtaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomtastePageRoutingModule
  ],
  declarations: [SymptomtastePage]
})
export class SymptomtastePageModule {}
