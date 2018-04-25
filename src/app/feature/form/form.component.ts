import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = new FormGroup({
    agree: new FormControl(),
    address: new FormControl(),
    firstName: new FormControl(
      '',
      {
        validators: Validators.required,
        updateOn: 'blur'
      }),
    lastName: new FormControl(
      '',
      {
        validators: Validators.required,
        updateOn: 'blur'
      }),
      quantity: new FormControl(
        '',
        Validators.required, 
        this.minimunQuantity.bind(this)
      )
  });

  get firstName(){return this.form.get('firstName')}
  get lastName(){return this.form.get('lastName')}
  get quantity(){return this.form.get('quantity')}

  constructor(private _http: Http) {}

  minimunQuantity(ctrl: AbstractControl): Observable<ValidationErrors | null>{
    return this._http.get('src/app/config/data.json')
    .map(res => res.json())
    .map(quantity => {
      return ctrl.value > quantity.quantity ? null : {toolow:{exected: quantity.quantity}};
    });
  }
  onSubmit() {
    console.log('Form submited!' + JSON.stringify(this.form.value));
  }
}
