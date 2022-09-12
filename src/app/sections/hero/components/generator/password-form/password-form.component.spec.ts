import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordInputComponent } from '../password-input/password-input.component';
import { PasswordStrengthComponent } from '../password-strength/password-strength.component';

import { PasswordFormComponent } from './password-form.component';

describe('PasswordFormComponent', () => {
  let component: PasswordFormComponent;
  let fixture: ComponentFixture<PasswordFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordFormComponent, PasswordInputComponent, PasswordStrengthComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ? Source: https://stackoverflow.com/questions/40093013/unit-testing-click-event-in-angular
  it('should call toggleAdvancedSettings() when click button', fakeAsync(() => {
    spyOn(component, 'toggleAdvancedSettings');

    let button = fixture.debugElement.nativeElement.querySelector('#advanced-settings');

    button.click();
    tick();

    expect(component.toggleAdvancedSettings).toHaveBeenCalled();
  }));

  it('should toggle advanced value when click button', fakeAsync(() => {

    const initialValue: boolean = component.advanced;
    let button = fixture.debugElement.nativeElement.querySelector('#advanced-settings');

    button.click();
    tick();

    expect(component.advanced).toBe(!initialValue);
  }));

});
