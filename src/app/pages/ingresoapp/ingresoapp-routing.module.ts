import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoappPage } from './ingresoapp.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoappPageRoutingModule {}
