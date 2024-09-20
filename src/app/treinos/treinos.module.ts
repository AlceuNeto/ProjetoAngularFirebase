import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { TreinosComponent } from './treinos.component';



@NgModule({
  declarations: [TreinosComponent],
  imports: [
    CommonModule,IonicModule,
    RouterLink
  ],
  exports:[
    TreinosComponent,
  ]
})
export class TreinosModule { }
