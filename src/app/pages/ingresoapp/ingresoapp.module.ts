import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoappPageRoutingModule } from './ingresoapp-routing.module';

import { IngresoappPage } from './ingresoapp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoappPageRoutingModule
  ],
  declarations: [IngresoappPage]
})
export class IngresoappPageModule {}
