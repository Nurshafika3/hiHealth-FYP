import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuhyperPageRoutingModule } from './auhyper-routing.module';

import { AuhyperPage } from './auhyper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuhyperPageRoutingModule
  ],
  declarations: [AuhyperPage]
})
export class AuhyperPageModule {}
