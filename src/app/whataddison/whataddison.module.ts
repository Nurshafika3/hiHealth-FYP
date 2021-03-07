import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhataddisonPageRoutingModule } from './whataddison-routing.module';

import { WhataddisonPage } from './whataddison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhataddisonPageRoutingModule
  ],
  declarations: [WhataddisonPage]
})
export class WhataddisonPageModule {}
