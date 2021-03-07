import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhathemoPageRoutingModule } from './whathemo-routing.module';

import { WhathemoPage } from './whathemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhathemoPageRoutingModule
  ],
  declarations: [WhathemoPage]
})
export class WhathemoPageModule {}
