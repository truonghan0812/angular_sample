/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormComponent } from './form/form.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    /* 3rd party components */
  ],
  declarations: [
    /* your components */
    NavComponent,
    CarouselComponent,
    SwitchComponent
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    NavComponent,
    CarouselComponent,
    SwitchComponent
    /* 3rd party components */
    /* our own custom components */
  ]
})
export class SharedModule { }