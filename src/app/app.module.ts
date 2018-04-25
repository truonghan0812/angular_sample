import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './Shared/app.shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './feature/form/form.component';
import { CoreModule } from './core/core.module';
import { HttpModule } from "@angular/http";
@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: 
  [
    CommonModule, 
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    HttpModule 
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
