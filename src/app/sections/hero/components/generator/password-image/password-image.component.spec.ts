import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordImageComponent } from './password-image.component';

describe('PasswordImageComponent', () => {
  let component: PasswordImageComponent;
  let fixture: ComponentFixture<PasswordImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordImageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
