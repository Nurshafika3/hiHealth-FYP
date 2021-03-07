import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuocdPageRoutingModule } from './auocd-routing.module';

import { AuocdPage } from './auocd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuocdPageRoutingModule
  ],
  declarations: [AuocdPage]
})
export class AuocdPageModule {}
