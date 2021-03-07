import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatdenguePageRoutingModule } from './whatdengue-routing.module';

import { WhatdenguePage } from './whatdengue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatdenguePageRoutingModule
  ],
  declarations: [WhatdenguePage]
})
export class WhatdenguePageModule {}
