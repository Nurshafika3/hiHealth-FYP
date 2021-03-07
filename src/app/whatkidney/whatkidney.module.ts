import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatkidneyPageRoutingModule } from './whatkidney-routing.module';

import { WhatkidneyPage } from './whatkidney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatkidneyPageRoutingModule
  ],
  declarations: [WhatkidneyPage]
})
export class WhatkidneyPageModule {}
