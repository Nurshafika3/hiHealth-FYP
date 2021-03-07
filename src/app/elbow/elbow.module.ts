import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElbowPageRoutingModule } from './elbow-routing.module';

import { ElbowPage } from './elbow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElbowPageRoutingModule
  ],
  declarations: [ElbowPage]
})
export class ElbowPageModule {}
