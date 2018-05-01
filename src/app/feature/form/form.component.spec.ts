import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormComponent } from './form.component';
import 'rxjs/add/operator/map'
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../core/data.service';
import { of } from "rxjs/observable/of";
import { Observable } from 'rxjs/Observable';
import { By } from "@angular/platform-browser/src/dom/debug/by";
import { AddressComponent } from '../../shared/address/address.component';
import { Component } from '@angular/core';


describe('Isolated form testing', () => {
    let dataService: DataService;
    let fixture: ComponentFixture<FormComponent>;
    let formComponent: FormComponent;

    const validFormValue = {
        firstName: 'Han',
        lastName: 'Huynh',
        quantity: 5
    }
    const invalidFormValue = {
        firstName: 'Han',
        lastName: 'Huynh',
        quantity: 0
    }
    beforeEach(async () => {
        TestBed.configureTestingModule({
            declarations: [FormComponent, AddressComponent],
            imports:[
                ReactiveFormsModule, 
                FormsModule, 
                HttpClientModule
            ],
            providers:[
                DataService,
            ]
        })
        fixture = TestBed.createComponent(FormComponent);
        dataService = TestBed.get(DataService);
        formComponent = fixture.componentInstance;
    });
    // create reusable function for a dry spec.
    function updateForm(firstName: String, lastName: String, quantity: Number) {
        formComponent.form.controls['firstName'].setValue(firstName);
        formComponent.form.controls['lastName'].setValue(lastName);
        formComponent.form.controls['quantity'].setValue(quantity);
    }

    it('isValid should be false when form is invalid', () => {
        spyOn(dataService, 'getMinimumQuantity').and.returnValue(of({quantity: 1}));

        updateForm(validFormValue.firstName, validFormValue.lastName, validFormValue.quantity);
        expect(formComponent.form.get('quantity').errors).toBeNull;
        expect(formComponent.form.get('quantity').value).toBeGreaterThanOrEqual(2);
        expect(formComponent.form.valid).toBeTruthy();

        updateForm(invalidFormValue.firstName, invalidFormValue.lastName, invalidFormValue.quantity);
        expect(formComponent.form.get('quantity').value).toBeLessThan(2);
        expect(formComponent.form.get('quantity').errors.toolow.exected).toEqual(1);
        expect(formComponent.form.valid).toBeFalsy();
    });

})
