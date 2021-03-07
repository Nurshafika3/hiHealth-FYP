import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddisonPageRoutingModule } from './addison-routing.module';

import { AddisonPage } from './addison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddisonPageRoutingModule
  ],
  declarations: [AddisonPage]
})
export class AddisonPageModule {}
