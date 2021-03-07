import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionhemoPageRoutingModule } from './solutionhemo-routing.module';

import { SolutionhemoPage } from './solutionhemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionhemoPageRoutingModule
  ],
  declarations: [SolutionhemoPage]
})
export class SolutionhemoPageModule {}
