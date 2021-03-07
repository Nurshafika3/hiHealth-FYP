import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionsalmonPageRoutingModule } from './solutionsalmon-routing.module';

import { SolutionsalmonPage } from './solutionsalmon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionsalmonPageRoutingModule
  ],
  declarations: [SolutionsalmonPage]
})
export class SolutionsalmonPageModule {}
