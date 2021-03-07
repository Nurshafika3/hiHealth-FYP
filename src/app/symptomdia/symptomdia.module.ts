import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomdiaPageRoutingModule } from './symptomdia-routing.module';

import { SymptomdiaPage } from './symptomdia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomdiaPageRoutingModule
  ],
  declarations: [SymptomdiaPage]
})
export class SymptomdiaPageModule {}
