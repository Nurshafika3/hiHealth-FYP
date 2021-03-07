import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KidneyPageRoutingModule } from './kidney-routing.module';

import { KidneyPage } from './kidney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KidneyPageRoutingModule
  ],
  declarations: [KidneyPage]
})
export class KidneyPageModule {}
