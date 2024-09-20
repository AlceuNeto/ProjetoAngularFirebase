import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderModule } from '../shared/header/header.module';
import { BannerModule } from '../banner/banner.module';
import { TreinosModule } from '../treinos/treinos.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule,
    BannerModule,
    TreinosModule,
    FooterModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
