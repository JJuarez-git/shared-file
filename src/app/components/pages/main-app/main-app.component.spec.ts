/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainAppComponent } from './main-app.component';

describe('MainAppComponent', () => {
  let component: MainAppComponent;
  let fixture: ComponentFixture<MainAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
