import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionhyperPageRoutingModule } from './solutionhyper-routing.module';

import { SolutionhyperPage } from './solutionhyper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionhyperPageRoutingModule
  ],
  declarations: [SolutionhyperPage]
})
export class SolutionhyperPageModule {}
