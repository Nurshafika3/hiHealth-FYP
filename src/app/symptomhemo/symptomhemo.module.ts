import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomhemoPageRoutingModule } from './symptomhemo-routing.module';

import { SymptomhemoPage } from './symptomhemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomhemoPageRoutingModule
  ],
  declarations: [SymptomhemoPage]
})
export class SymptomhemoPageModule {}
