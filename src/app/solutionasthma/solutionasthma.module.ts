import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionasthmaPageRoutingModule } from './solutionasthma-routing.module';

import { SolutionasthmaPage } from './solutionasthma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionasthmaPageRoutingModule
  ],
  declarations: [SolutionasthmaPage]
})
export class SolutionasthmaPageModule {}
