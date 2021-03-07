import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionocdPageRoutingModule } from './solutionocd-routing.module';

import { SolutionocdPage } from './solutionocd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionocdPageRoutingModule
  ],
  declarations: [SolutionocdPage]
})
export class SolutionocdPageModule {}
