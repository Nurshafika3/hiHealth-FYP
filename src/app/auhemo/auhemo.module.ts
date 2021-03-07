import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuhemoPageRoutingModule } from './auhemo-routing.module';

import { AuhemoPage } from './auhemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuhemoPageRoutingModule
  ],
  declarations: [AuhemoPage]
})
export class AuhemoPageModule {}
