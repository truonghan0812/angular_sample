import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
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
        })
    });
  }
  onSubmit() {
    console.log('Form submited!' + JSON.stringify(this.form.value));
  }
}
