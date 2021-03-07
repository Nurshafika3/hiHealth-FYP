import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomocdPageRoutingModule } from './symptomocd-routing.module';

import { SymptomocdPage } from './symptomocd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomocdPageRoutingModule
  ],
  declarations: [SymptomocdPage]
})
export class SymptomocdPageModule {}
