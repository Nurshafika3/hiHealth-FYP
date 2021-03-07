import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionelbowPageRoutingModule } from './solutionelbow-routing.module';

import { SolutionelbowPage } from './solutionelbow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionelbowPageRoutingModule
  ],
  declarations: [SolutionelbowPage]
})
export class SolutionelbowPageModule {}
