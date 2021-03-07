import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatelbowPageRoutingModule } from './whatelbow-routing.module';

import { WhatelbowPage } from './whatelbow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatelbowPageRoutingModule
  ],
  declarations: [WhatelbowPage]
})
export class WhatelbowPageModule {}
