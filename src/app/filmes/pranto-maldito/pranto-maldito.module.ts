import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrantoMalditoPageRoutingModule } from './pranto-maldito-routing.module';

import { PrantoMalditoPage } from './pranto-maldito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrantoMalditoPageRoutingModule
  ],
  declarations: [PrantoMalditoPage]
})
export class PrantoMalditoPageModule {}
