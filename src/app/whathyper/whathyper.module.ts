import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhathyperPageRoutingModule } from './whathyper-routing.module';

import { WhathyperPage } from './whathyper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhathyperPageRoutingModule
  ],
  declarations: [WhathyperPage]
})
export class WhathyperPageModule {}
