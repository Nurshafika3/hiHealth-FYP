import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatdiaPageRoutingModule } from './whatdia-routing.module';

import { WhatdiaPage } from './whatdia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatdiaPageRoutingModule
  ],
  declarations: [WhatdiaPage]
})
export class WhatdiaPageModule {}
