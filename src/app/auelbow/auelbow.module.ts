import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuelbowPageRoutingModule } from './auelbow-routing.module';

import { AuelbowPage } from './auelbow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuelbowPageRoutingModule
  ],
  declarations: [AuelbowPage]
})
export class AuelbowPageModule {}
