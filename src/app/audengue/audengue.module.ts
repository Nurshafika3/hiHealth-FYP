import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudenguePageRoutingModule } from './audengue-routing.module';

import { AudenguePage } from './audengue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudenguePageRoutingModule
  ],
  declarations: [AudenguePage]
})
export class AudenguePageModule {}
