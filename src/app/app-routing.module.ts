import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './shared/form/form.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'form', component: FormComponent}
];
@NgModule({
  imports: [ RouterModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}