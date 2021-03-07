import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutiondenguePageRoutingModule } from './solutiondengue-routing.module';

import { SolutiondenguePage } from './solutiondengue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutiondenguePageRoutingModule
  ],
  declarations: [SolutiondenguePage]
})
export class SolutiondenguePageModule {}
