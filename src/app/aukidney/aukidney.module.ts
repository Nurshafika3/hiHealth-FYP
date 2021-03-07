import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AukidneyPageRoutingModule } from './aukidney-routing.module';

import { AukidneyPage } from './aukidney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AukidneyPageRoutingModule
  ],
  declarations: [AukidneyPage]
})
export class AukidneyPageModule {}
