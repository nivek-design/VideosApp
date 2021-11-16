import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrantoMalditoPage } from './pranto-maldito.page';

const routes: Routes = [
  {
    path: '',
    component: PrantoMalditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrantoMalditoPageRoutingModule {}
