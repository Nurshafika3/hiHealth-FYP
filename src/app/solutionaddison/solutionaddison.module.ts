import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionaddisonPageRoutingModule } from './solutionaddison-routing.module';

import { SolutionaddisonPage } from './solutionaddison.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionaddisonPageRoutingModule
  ],
  declarations: [SolutionaddisonPage]
})
export class SolutionaddisonPageModule {}
