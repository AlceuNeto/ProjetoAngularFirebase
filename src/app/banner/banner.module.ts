import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { BannerComponent } from './banner.component';



@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,IonicModule,
    RouterLink
  ],
  exports:[
    BannerComponent,
  ]
})
export class BannerModule { }
