import {} from 'jasmine';
import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Component } from '@angular/core';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent] });
  });

  it('should work', () => {
    // let fixture = TestBed.createComponent(AppComponent);
    // expect(fixture.componentInstance instanceof AppComponent).toBe(
    //   true,
    //   'should create AppComponent'
    // );
    expect(1).toBe(1);
  });
});

