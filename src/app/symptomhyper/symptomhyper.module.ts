import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomhyperPageRoutingModule } from './symptomhyper-routing.module';

import { SymptomhyperPage } from './symptomhyper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomhyperPageRoutingModule
  ],
  declarations: [SymptomhyperPage]
})
export class SymptomhyperPageModule {}
