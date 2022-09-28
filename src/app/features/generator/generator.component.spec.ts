import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GeneratorComponent } from './generator.component';
import { GeneratorModule } from './generator.module';


describe('GeneratorComponent', () => {
  let component: GeneratorComponent,
    fixture: ComponentFixture<GeneratorComponent>,
    el: DebugElement;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [GeneratorModule],

    })
      .compileComponents()
      .then(() => {

        fixture = TestBed.createComponent(GeneratorComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;

        fixture.detectChanges();

      })

  }));

  it('should create', () => {

    expect(component).toBeDefined();

  });

  it('should have default values', () => {

    expect(component.advanced).withContext("Advanced has not default value").toBeDefined();
    expect(component.form).withContext("Form has not default value").toBeDefined();
    expect(component.password).withContext("Password has not default value").toBeDefined();
    expect(component.last).withContext("Last has not default value").toBeDefined();

  });

  it('should have a password', () => {

    expect(component.password.value.length)
      .withContext("Password must have at least one character length")
      .toBeGreaterThan(0);

  });

});
