import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomaddisonPageRoutingModule } from './symptomaddison-routing.module';

import { SymptomaddisonPage } from './symptomaddison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomaddisonPageRoutingModule
  ],
  declarations: [SymptomaddisonPage]
})
export class SymptomaddisonPageModule {}
