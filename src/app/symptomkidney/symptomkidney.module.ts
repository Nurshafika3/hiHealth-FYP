import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomkidneyPageRoutingModule } from './symptomkidney-routing.module';

import { SymptomkidneyPage } from './symptomkidney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomkidneyPageRoutingModule
  ],
  declarations: [SymptomkidneyPage]
})
export class SymptomkidneyPageModule {}
