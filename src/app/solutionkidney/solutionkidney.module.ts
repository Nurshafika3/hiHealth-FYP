import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionkidneyPageRoutingModule } from './solutionkidney-routing.module';

import { SolutionkidneyPage } from './solutionkidney.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionkidneyPageRoutingModule
  ],
  declarations: [SolutionkidneyPage]
})
export class SolutionkidneyPageModule {}
