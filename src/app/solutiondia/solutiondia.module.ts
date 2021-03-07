import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutiondiaPageRoutingModule } from './solutiondia-routing.module';

import { SolutiondiaPage } from './solutiondia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutiondiaPageRoutingModule
  ],
  declarations: [SolutiondiaPage]
})
export class SolutiondiaPageModule {}
