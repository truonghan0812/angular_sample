import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/app.shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './feature/form/form.component';
@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: 
  [
    CommonModule, 
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
