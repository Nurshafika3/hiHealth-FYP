import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutiontastePageRoutingModule } from './solutiontaste-routing.module';

import { SolutiontastePage } from './solutiontaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutiontastePageRoutingModule
  ],
  declarations: [SolutiontastePage]
})
export class SolutiontastePageModule {}
