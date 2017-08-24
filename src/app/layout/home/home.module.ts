import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StatModule } from '../../shared';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    StatModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
