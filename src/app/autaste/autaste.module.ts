import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutastePageRoutingModule } from './autaste-routing.module';

import { AutastePage } from './autaste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutastePageRoutingModule
  ],
  declarations: [AutastePage]
})
export class AutastePageModule {}
