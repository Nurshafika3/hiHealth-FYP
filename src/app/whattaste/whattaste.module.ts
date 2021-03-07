import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhattastePageRoutingModule } from './whattaste-routing.module';

import { WhattastePage } from './whattaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhattastePageRoutingModule
  ],
  declarations: [WhattastePage]
})
export class WhattastePageModule {}
