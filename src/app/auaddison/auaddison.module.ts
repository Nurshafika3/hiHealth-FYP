import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuaddisonPageRoutingModule } from './auaddison-routing.module';

import { AuaddisonPage } from './auaddison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuaddisonPageRoutingModule
  ],
  declarations: [AuaddisonPage]
})
export class AuaddisonPageModule {}
