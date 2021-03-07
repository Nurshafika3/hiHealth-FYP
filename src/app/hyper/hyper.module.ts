import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HyperPageRoutingModule } from './hyper-routing.module';

import { HyperPage } from './hyper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HyperPageRoutingModule
  ],
  declarations: [HyperPage]
})
export class HyperPageModule {}
